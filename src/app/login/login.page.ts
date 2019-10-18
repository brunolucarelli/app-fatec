import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  useremail: string = ""
  userpassword: string = ""

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  async login() {
    const { useremail, userpassword } = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(useremail, userpassword)
      this.router.navigateByUrl('/');
    } catch(err) {
      console.log(err)
    }
  }
}
