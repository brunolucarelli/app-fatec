import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth'

import { IonSlides } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

//import { UserService } from 'src/app/services/data/user.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss']
})

export class OnboardingPage {

  @ViewChild('slides', { static: true }) slides: IonSlides;

  usermail: string = ""
  userpassword: string = ""
  slideNumber: any

  constructor(
    public afAuth: AngularFireAuth,
    private storage: Storage,
    private router: Router,
    public toastController: ToastController,
    //public user: UserService,
    public afstore: AngularFirestore
  ) { }

  async finish() {
    await this.storage.set('onboardingComplete', true);
    this.router.navigateByUrl('/tabs/home');
  }

  async register() {
    const { usermail, userpassword } = this
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(usermail, userpassword)
      /*this.afstore.doc('users/${res.user.uid}').set({
				usermail
			})*/
      this.presentToast('Conta criada.');
      this.slides.lockSwipeToNext(false)
      this.slides.slideTo(2, 500);
    } catch (error) {
      if (error.code == 'auth/email-already-in-use') {
        this.presentToast('Este e-mail já está em uso.')
      } else if (error.code == 'auth/weak-password') {
        this.presentToast('Senha fraca.')
      }
      console.dir(error)
    }

  }

  async presentToast(msg: any) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  onSlideChanged() {
    this.slides.getActiveIndex().then(
      (index) => {
        let currentIndex = index;
        console.log(currentIndex)
        if (currentIndex == 0) {
          this.slides.lockSwipeToNext(false)
        }
        if (currentIndex == 1) {
          this.slides.lockSwipeToNext(true)
        }
        if (currentIndex == 2) {
          this.slides.lockSwipeToNext(false)
        }
        if (currentIndex == 3) {
          this.slides.lockSwipeToNext(false)
        }
      });
  }

  async goToLogin() {
    await this.storage.set('onboardingComplete', true);
    this.router.navigateByUrl('/login');
  }

}