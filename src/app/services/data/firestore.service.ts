import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Action } from 'src/app/models/acao.interface'

import 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) { }

  createAction(
    actionTitle: string,
    actionDescription: string,
    actionImage: string,
    actionUserID: string,
    actionUserName: string
  ): Promise<void> {
    const id = this.firestore.createId();

    return this.firestore.doc(`actionList/${id}`).set({
      id,
      actionTitle,
      actionDescription,
      actionImage,
      actionUserID,
      actionUserName
    });
  }

  getActionList(): AngularFirestoreCollection<Action> {
    return this.firestore.collection('actionList');
  }

  getActionDetail(actionId: string): AngularFirestoreDocument<Action> {
    return this.firestore.collection('actionList').doc(actionId);
  }

}
