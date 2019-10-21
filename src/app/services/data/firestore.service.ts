import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Action } from 'src/app/models/acao.interface'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) { }

  createAction(
    actionTitle: string,
    actionDescription: string,
  ): Promise<void> {

    const id = this.firestore.createId();

    return this.firestore.doc('actionList/${id}').set({
      id,
      actionTitle,
      actionDescription
    });
   }

   getActionList(): AngularFirestoreCollection<Action> {
    return this.firestore.collection('actionList');
  }

  getActionDetail(actionId: string): AngularFirestoreDocument<Action> {
    return this.firestore.collection('actionList').doc(actionId);
  }
}
