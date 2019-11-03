import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AcaoPage } from './acao.page';

import { ParticiparModalComponentModule } from 'src/app/participar-modal/participar-modal.component.module'

const routes: Routes = [
  {
    path: '',
    component: AcaoPage
  }
];

@NgModule({
  imports: [
    ParticiparModalComponentModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    AcaoPage
  ]
})
export class AcaoPageModule {}
