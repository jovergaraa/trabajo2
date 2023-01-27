import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, updateDoc } from '@angular/fire/firestore';
import { Storage, getDownloadURL, ref, uploadString } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Mascota } from './mascotas';
import { Photo } from '@capacitor/camera';
import { setDoc } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  constructor(
    private firestore: Firestore,
    private storage: Storage
    ) { }

  getMascotas(): Observable<Mascota[]> {
    const mascotasRef = collection(this.firestore,'mascotas');
    return collectionData(mascotasRef, {idField:'id'}) as Observable<Mascota[]>;
  }

  getMascotaById(id:string): Observable<Mascota> {
    const mascotaRef = doc(this.firestore,`mascotas/${id}`);
    return docData(mascotaRef, {idField:'id'}) as Observable<Mascota>;
  }

  addMascota(mascota:Mascota){
    const mascotaRef = collection(this.firestore,'mascotas');
    return addDoc(mascotaRef,mascota);
  }

  deleteMascota(mascota:Mascota){
    const mascotaRef = doc(this.firestore,`mascotas/${mascota.id}`);
    return deleteDoc(mascotaRef);
  }

  updateMascota(mascota:Mascota){
    const mascotaRef = doc(this.firestore,`mascotas/${mascota.id}`);
    return updateDoc(mascotaRef, 
      {
        nombre: mascota.nombre,
        tipo: mascota.tipo,
        edad: mascota.edad,
        color: mascota.color
    });
  }

  async changePhoto(cameraFile: Photo, mascota:Mascota){
    const path = `uploads/${mascota.id}/profile.png`;
    const storageRef = ref(this.storage, path);

    try {
      await uploadString(storageRef, cameraFile.base64String || '', 'base64');

      const imageUrl = await getDownloadURL(storageRef);
      const mascotaRef = doc(this.firestore,`mascotas/${mascota.id}`);
      await setDoc(mascotaRef, {imageUrl}, {merge:true});
      return true;
    }
    catch(error){
      return false;
    }

  }

}
