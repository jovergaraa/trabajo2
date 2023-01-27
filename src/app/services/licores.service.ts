import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, updateDoc } from '@angular/fire/firestore';
import { Storage, getDownloadURL, ref, uploadString } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Licores } from './licores';
import { Photo } from '@capacitor/camera';
import { setDoc } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class LicoresService {

  constructor(
    private firestore: Firestore,
    private storage: Storage
    ) { }

  getLicores(): Observable<Licores[]> {
    const licoresRef = collection(this.firestore,'licores');
    return collectionData(licoresRef, {idField:'id'}) as Observable<Licores[]>;
  }

  getLicoresById(id:string): Observable<Licores> {
    const licoresRef = doc(this.firestore,`licores/${id}`);
    return docData(licoresRef, {idField:'id'}) as Observable<Licores>;
  }

  addLicores(licores:Licores){
    const licoresRef = collection(this.firestore,'licores');
    return addDoc(licoresRef,licores);
  }

  deleteLicores(licores:Licores){
    const licoresRef = doc(this.firestore,`licores/${licores.id}`);
    return deleteDoc(licoresRef);
  }

  updateLicores(licores:Licores){
    const licoresRef = doc(this.firestore,`licores/${licores.id}`);
    return updateDoc(licoresRef, 
      {
        nombre: licores.nombre,
        tipo: licores.tipo,
        precio: licores.precio,
        marca: licores.marca,
        grados: licores.grados,
        origen: licores.origen
    });
  }

  async changePhoto(cameraFile: Photo,licores:Licores){
    const path = `uploads/${licores.id}/profile.png`;
    const storageRef = ref(this.storage, path);

    try {
      await uploadString(storageRef, cameraFile.base64String || '', 'base64');

      const imageUrl = await getDownloadURL(storageRef);
      const licoresRef = doc(this.firestore,`licores/${licores.id}`);
      await setDoc(licoresRef, {imageUrl}, {merge:true});
      return true;
    }
    catch(error){
      return false;
    }

  }

}

