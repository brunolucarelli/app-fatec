import { Component, OnInit } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';

import * as firebase from 'firebase/app';
import { PerfilService } from 'src/app/services/user/perfil.service';

import { Router } from '@angular/router';

export interface Image {
  id: string;
  image: string;
}

@Component({
  selector: 'app-criaracao',
  templateUrl: './criaracao.page.html',
  styleUrls: ['./criaracao.page.scss'],
})

export class CriaracaoPage implements OnInit {

  imageAction: any
  imageActionURL: any
  url: any
  newImage: Image = {
    id: this.afs.createId(), image: ''
  }
  loading: boolean = false;

  actionUserID: any;
  actionUserName: string;

  public userProfile: any;

  public createActionForm: FormGroup;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public firestoreService: FirestoreService,
    formBuilder: FormBuilder,
    private router: Router,
    private afs: AngularFirestore,
    private storage: AngularFireStorage,
    private profileService: PerfilService
  ) {
    this.createActionForm = formBuilder.group({
      actionTitle: ['', Validators.required],
      actionDescription: ['', Validators.required],
      actionImage: ['', Validators.required]
    });
    firebase.auth().onAuthStateChanged((user) =>
      {
        if (user)
        {
          this.actionUserID = user.uid;
          //this.name = user.name;
          console.log('User is signed in');
          console.log(this.actionUserID);
        }
        else
        {
          // No user is signed in.
          console.log('User is NOT signed in');
        }
      });
  }

  setImageAction(event) {
    this.imageAction = event;
  }

  async createAction() {
    const loading = await this.loadingCtrl.create();
    loading.present();
    try {
      const fileraw = this.imageAction.target.files[0];
    console.log(fileraw)
    const filePath = '/Image/' + this.newImage.id + '/' + 'Image' + (Math.floor(1000 + Math.random() * 9000) + 1);
    const result = this.SaveImageRef(filePath, fileraw);
    const ref = result.ref;
    result.task.then(a => {
      ref.getDownloadURL().subscribe(a => {
        console.log(a);

        this.imageActionURL = a;

        this.newImage.image = a;

        const actionTitle = this.createActionForm.value.actionTitle;
        const actionDescription = this.createActionForm.value.actionDescription;
        const actionImage = this.imageActionURL;

        this.firestoreService
          .createAction(actionTitle, actionDescription, actionImage, this.actionUserID, this.actionUserName)
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
        return loading.present();
      });
      this.afs.collection('Image').doc(this.newImage.id).set(this.newImage);
    }); error => {
      alert("Error");
    }
        
      } catch (error) {
        console.log(error);
      }
  }

  SaveImageRef(filePath, file) {

    return {
      task: this.storage.upload(filePath, file)
      , ref: this.storage.ref(filePath)
    };
  }

  ngOnInit() {
    this.profileService
      .getUserProfile()
      .get()
      .then(userProfileSnapshot => {
        this.userProfile = userProfileSnapshot.data();
        this.actionUserName = this.userProfile.name;
      });
  }

}
