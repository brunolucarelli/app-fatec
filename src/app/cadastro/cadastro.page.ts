import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { Router } from '@angular/router';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  useremail: string = ""
  userpassword: string = ""

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    public toastController: ToastController
    ) { }

  ngOnInit() {
  }

  async register() {
    const { useremail, userpassword } = this
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(useremail, userpassword)
      this.presentToast('Conta criada.');
      this.router.navigateByUrl('/');
    } catch(error) {
      if(error.code == 'auth/email-already-in-use'){
        this.presentToast('Este e-mail já está em uso.')
      } else if(error.code == 'auth/weak-password'){
        this.presentToast('Senha fraca.')
      }
      console.dir(error)
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
