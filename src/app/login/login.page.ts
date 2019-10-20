import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  useremail: string = ""
  userpassword: string = ""

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    public toastController: ToastController
    ) { }

  ngOnInit() {
  }

  async login() {
    const { useremail, userpassword } = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(useremail, userpassword)
      this.router.navigateByUrl('/');
    } catch(err) {
      if(err.code == 'auth/user-not-found' || err.code == 'auth/wrong-password'){
        this.presentToast('E-mail ou senha inválidos.')
      }
      console.log(err)
    }
  }

  async presentToast(msg:any) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}
