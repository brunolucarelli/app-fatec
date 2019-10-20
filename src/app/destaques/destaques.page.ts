import { Component, OnInit } from '@angular/core';

import { FirestoreService } from 'src/app/services/data/firestore.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.page.html',
  styleUrls: ['./destaques.page.scss'],
})
export class DestaquesPage implements OnInit {

  public actionList;

  constructor(
    private firestoreService: FirestoreService,
    private router: Router
  ) { }

  /*loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
    }, 1000);
  }*/

  ngOnInit() {
    this.actionList = this.firestoreService.getActionList().valueChanges();
  }
}