import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'src/app/models/acao.interface';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { Observable } from 'rxjs';

import * as firebase from 'firebase/app';
import { PerfilService } from 'src/app/services/user/perfil.service';
import { ParticipateService } from 'src/app/services/data/participate.service';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.page.html',
  styleUrls: ['./acao.page.scss'],
})
export class AcaoPage implements OnInit {

  viewImage: string

  public userProfile: any;
  id: any;

  public action: Observable<Action>;
  public userList;

  actionIdd: any;

  participateType: string;

  constructor(
    private alertCtrl: AlertController,
    private firestoreService: FirestoreService,
    private route: ActivatedRoute,
    private profileService: PerfilService,
    private participateService: ParticipateService
  ) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.id = user.uid;
        console.log('User is signed in');
        console.log(this.id);
      }
      else {
        console.log('User is NOT signed in');
      }
    });
  }

  async participate(): Promise<void> {
    const alert = await this.alertCtrl.create({
      subHeader: 'Participar',
      buttons: [
        {
          text: 'Visitante',
          handler: data => {
            this.participateType = "Visitante",
              this.participateService.createParticipation(this.id, this.actionIdd, this.participateType);
          },
        },
        {
          text: 'Voluntário',
          handler: data => {
            this.participateType = "Voluntário",
              this.participateService.createParticipation(this.id, this.actionIdd, this.participateType);
          },
        },
      ],
    });
    await alert.present();
  }

  ngOnInit() {
    const actionId: string = this.route.snapshot.paramMap.get('id');
    this.action = this.firestoreService.getActionDetail(actionId).valueChanges();
    this.actionIdd = actionId;

    this.profileService
      .getUserProfile()
      .get()
      .then(userProfileSnapshot => {
        this.userProfile = userProfileSnapshot.data();
      });

    this.userList = this.profileService.getUserList().valueChanges();
  }
}
