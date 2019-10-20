import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'src/app/models/acao.interface'
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.page.html',
  styleUrls: ['./acao.page.scss'],
})
export class AcaoPage implements OnInit {

  public action: Observable<Action>;

  constructor(
    private firestoreService: FirestoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const actionId: string = this.route.snapshot.paramMap.get('id');
    this.action = this.firestoreService.getActionDetail(actionId).valueChanges();
  }

}
