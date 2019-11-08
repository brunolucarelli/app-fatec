import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ParticipateService } from 'src/app/services/data/participate.service';
import * as firebase from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { snapshotChanges } from 'angularfire2/database';
import { empty } from 'rxjs';

@Component({
  selector: 'app-participar-modal',
  templateUrl: './participar-modal.component.html',
  styleUrls: ['./participar-modal.component.scss'],
})
export class ParticiparModalComponent implements OnInit {

  setParticipationType: string;

  currentUserId: any;
  actionId: any;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private participateService: ParticipateService,
    public alertController: AlertController
  ) { }

  participationAsVisitant() {

    var db = firebase.firestore();
    var query = db.collection('participationList')
      .where("userId", "==", this.currentUserId)
      .where("actionId", "==", this.actionId)
      .get()
      .then((snapshotChanges) => {
        if (snapshotChanges.empty) {
          this.presentAlertNew("Confirma a sua participação como visitante?", "Visitante");
        } else {
          snapshotChanges.forEach((docs) => {
            if (docs.data().actionId == this.actionId) {
              if (docs.data().participationType == "Voluntário") {
                this.presentAlertExist("Você já se inscreveu como voluntário, deseja trocar para visitante?", docs.id, "Visitante");
              } else if (docs.data().participationType == "Visitante") {
                this.presentAlertExist("Você já se inscreveu como visitante, deseja trocar para voluntário?", docs.id, "Voluntário");
              }
            } else {
              this.presentAlert("Erro")
            }
          })
        }
      })
  }

  participationAsVolunteer() {

    var db = firebase.firestore();
    var query = db.collection('participationList')
      .where("userId", "==", this.currentUserId)
      .where("actionId", "==", this.actionId)
      .get()
      .then((snapshotChanges) => {
        if (snapshotChanges.empty) {
          this.presentAlertNew("Confirma a sua participação como Voluntário?", "Voluntário");
        } else {
          snapshotChanges.forEach((docs) => {
            if (docs.data().actionId == this.actionId) {
              if (docs.data().participationType == "Voluntário") {
                this.presentAlertExist("Você já se inscreveu como voluntário, deseja trocar para visitante?", docs.id, "Visitante");
              } else if (docs.data().participationType == "Visitante") {
                this.presentAlertExist("Você já se inscreveu como visitante, deseja trocar para voluntário?", docs.id, "Voluntário");
              }
            } else {
              this.presentAlert("Erro")
            }
          })
        }
      })
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  async presentAlert(message: any) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['OK']
    });
    alert.present();
  }

  async presentAlertNew(message: any, type: any) {
    const alert = await this.alertController.create({
      message: message,
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Confirmar',
          handler: data => {
            this.participateService.createParticipation(this.currentUserId, this.actionId, type);
            console.log("Participação confirmada como " + type);
          },
        },
      ]
    });
    alert.present();
  }

  async presentAlertExist(message: any, id: any, type: any) {
    const alert = await this.alertController.create({
      message: message,
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Confirmar',
          handler: data => {
            this.participateService.updateParticipation(type, id);
            console.log("Atualizado para " + type);
          },
        },
      ]
    });
    alert.present();
  }

  ngOnInit() {
    console.table(this.navParams);
    this.currentUserId = this.navParams.data.currentUserId;
    this.actionId = this.navParams.data.actionId;
    //console.log(this.currentUserId, this.actionId);
  }

}
