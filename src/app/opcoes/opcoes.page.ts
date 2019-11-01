import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-opcoes',
  templateUrl: './opcoes.page.html',
  styleUrls: ['./opcoes.page.scss'],
})
export class OpcoesPage implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    public toastController: ToastController,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  public disabled = false;

  public change() {
    this.disabled = !this.disabled;
  }

  async signOut() {
    try {
      await this.authService.logoutUser();
      this.presentToast("Você saiu.");
      this.router.navigateByUrl('/login');
    } catch (error) {
      console.log(error);
    }
  }

  async presentToast(msg: any) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}
