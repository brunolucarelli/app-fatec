import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { Participacao } from '../models/participacao.interface';

@Component({
  selector: 'app-inscricoes',
  templateUrl: './inscricoes.page.html',
  styleUrls: ['./inscricoes.page.scss'],
})

export class InscricoesPage implements OnInit {

  currentUserId: any;
  public list;

  constructor(
  ) {
  }

  getActionByUser() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          var db = firebase.firestore();
          var query = db.collection('participationList')
            .where("userId", "==", user.uid)
            .get()
            .then((querySnapshot) => {
              let arr = [];
              querySnapshot.forEach((doc) => {
                var obj = JSON.parse(JSON.stringify(doc.data()));
                arr.push(obj);
              });
              if (arr.length > 0) {
                resolve(arr);
              } else {
                console.log("No such document");
                resolve(null);
              }
            })
            .catch((error: any) => {
              reject(error);
            })
        }
      })
    })
  }

  ngOnInit() {
    this.getActionByUser().then((e) => {
      this.list = e;
    })
  }

}