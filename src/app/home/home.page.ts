import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/services/user/perfil.service';

import * as firebase from 'firebase/app';
import 'firebase/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  id: any;
  public userProfile: any;
  public firstname: any;

  constructor(
    private profileService: PerfilService,
  ) {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.id = user.uid;
        console.log('User is signed in');
      }
      else {
        console.log('User is NOT signed in');
      }
    });
  }

  ngOnInit() {
    this.profileService
      .getUserProfile()
      .get()
      .then(userProfileSnapshot => {
        this.userProfile = userProfileSnapshot.data();
        let fullname = this.userProfile.name;
        let names = fullname.split(" ");
        let firstname = names[0];
        this.firstname = firstname;
      });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.id = user.uid;
        console.log(this.id);
        this.getParticipation(this.id);
      }
    })
  }

  getParticipation(userId: any) {
    var db = firebase.firestore();
    var participationList = db.collection('participationList')
      .where("userId", "==", userId)
      .get()
      .then(function (querySnapshot) {
        /*
                querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
          });
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
        */
        if (querySnapshot.empty) {
          console.log("Não existe");
        } else {
          console.log("Existe");
        }
      });
  }
}
