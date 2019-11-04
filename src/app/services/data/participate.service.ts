import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Participacao } from 'src/app/models/participacao.interface';

import 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class ParticipateService {

  constructor(public firestore: AngularFirestore) { }

  createParticipation(
    userId: any,
    actionId: any,
    participationType: string
  ): Promise<void> {

    const id = this.firestore.createId();

    return this.firestore.doc(`participationList/${id}`).set({
      id,
      userId,
      actionId,
      participationType
    });
  }

  updateParticipation(participationType: string, id: any): Promise<any> {
    return this.firestore.doc(`participationList/${id}`).update({ participationType });
  }

  getParticipationList(): AngularFirestoreCollection<Participacao> {
    return this.firestore.collection('participationList');
  }

  getParticipationDetails(participationId: string): AngularFirestoreDocument<Participacao> {
    return this.firestore.collection('participationList').doc(participationId);
  }
}
