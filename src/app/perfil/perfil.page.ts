import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Perfil } from 'src/app/models/perfil.interface';
import { ActivatedRoute } from '@angular/router';
import { PerfilService } from 'src/app/services/user/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  id: any;
  public perfil: Observable<Perfil>;

  constructor(
    private firestoreService: PerfilService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const userId: string = this.route.snapshot.paramMap.get('id');
    this.perfil = this.firestoreService.getUserDetails(userId).valueChanges();
  }

}
