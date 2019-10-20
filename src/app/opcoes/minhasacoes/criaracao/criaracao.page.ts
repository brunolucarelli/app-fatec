import { Component, OnInit } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-criaracao',
  templateUrl: './criaracao.page.html',
  styleUrls: ['./criaracao.page.scss'],
})

export class CriaracaoPage {

  public createActionForm: FormGroup;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public firestoreService: FirestoreService,
    formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createActionForm = formBuilder.group({
      actionTitle: ['', Validators.required],
      actionDescription: ['', Validators.required],
  });
}

async createAction() {
  const loading = await this.loadingCtrl.create();

  const actionTitle = this.createActionForm.value.actionTitle;
  const actionDescription = this.createActionForm.value.actionDescription;

  this.firestoreService
    .createAction(actionTitle, actionDescription)
    .then(
      () => {
        loading.dismiss().then(() => {
          this.router.navigateByUrl('');
        });
      },
      error => {
        console.error(error);
      }
    );

  return await loading.present();
}

}
