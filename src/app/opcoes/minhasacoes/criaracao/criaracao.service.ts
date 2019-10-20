import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ActionService {
  public actionListRef: firebase.firestore.CollectionReference;
  constructor() {
    firebase.auth().onAuthStateChanged(action => {
      if (action) {
        this.actionListRef = firebase
          .firestore()
          .collection('/capa/${action.id}/actionList');
      }
    });
  }
}