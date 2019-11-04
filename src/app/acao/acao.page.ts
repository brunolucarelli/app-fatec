import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'src/app/models/acao.interface';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { Observable } from 'rxjs';

import { ModalController } from '@ionic/angular';
import { ParticiparModalComponent } from 'src/app/participar-modal/participar-modal.component';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.page.html',
  styleUrls: ['./acao.page.scss']
})

export class AcaoPage implements OnInit {

  currentUserId: any;
  userHasParticipation: boolean;

  actionId: any;
  actionDetails: Observable<Action>;

  constructor(
    private firestoreService: FirestoreService,
    private route: ActivatedRoute,
    public modalCtrl: ModalController
  ) { }

  async openParticiparModal() {

    const modal = await this.modalCtrl.create({
      component: ParticiparModalComponent,
      componentProps: {
        "currentUserId": this.currentUserId,
        "actionId": this.actionId
      }
    });
    return await modal.present();
  }

  ngOnInit() {
    const actionIdParam: string = this.route.snapshot.paramMap.get('id');
    this.actionDetails = this.firestoreService.getActionDetail(actionIdParam).valueChanges();
    this.actionId = actionIdParam;

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.currentUserId = user.uid;
        console.log(this.currentUserId);
      }
    })
  }
}
