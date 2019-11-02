import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { PerfilService } from 'src/app/services/user/perfil.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  public userProfile: any;
  public firstname: any;
  id: any;

  constructor(
    private profileService: PerfilService
  ) {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.id = user.uid;
        //this.name = user.name;
        console.log('User is signed in');
        console.log(this.id);
      }
      else {
        // No user is signed in.
        console.log('User is NOT signed in');
      }
    });
  }

  userName() {

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
  }
}
