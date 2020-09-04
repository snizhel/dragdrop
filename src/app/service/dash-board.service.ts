import { Injectable } from '@angular/core';
import { Dashbox } from '../models/dask-item.model'
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class DashBoardService {
  constructor(public afs: AngularFirestore) { }
  db: Array<Dashbox> = [
    {
      boxName: 'go to school',
      content: ['play game', 'play soccer'],
    },
  ];
  async updateTabCard(tabUUID, items) {
    return await this.afs.collection("cards").doc(tabUUID).set({
      "messages": items
    })
  }

}
