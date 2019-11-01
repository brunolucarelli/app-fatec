import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  id: any;
  name: string;

  constructor() {

  firebase.auth().onAuthStateChanged((user) =>
      {
        if (user)
        {
          this.id = user.uid;
          this.name = user.name;
          console.log('User is signed in');
          console.log(this.id, this.name);
        }
        else
        {
          // No user is signed in.
          console.log('User is NOT signed in');
        }
      });
   }
}
