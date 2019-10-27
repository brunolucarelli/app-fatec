import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
//import { UserService } from 'src/app/services/data/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usermail: string = ""
  userpassword: string = ""

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    public toastController: ToastController
    //public user: UserService
    ) { }

  ngOnInit() {
  }

  async login() {
    const { usermail, userpassword } = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(usermail, userpassword)
      /*if(res.user) {
        this.user.setUser({
          usermail,
          uid: res.user.uid
        })
        this.router.navigateByUrl('/');
      }*/this.router.navigateByUrl('/');
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
