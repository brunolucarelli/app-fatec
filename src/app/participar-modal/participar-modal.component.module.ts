import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ParticiparModalComponent } from 'src/app/participar-modal/participar-modal.component';

@NgModule ({
    imports: [CommonModule, IonicModule],
    declarations: [ParticiparModalComponent],
    entryComponents: [ParticiparModalComponent],
    exports: [ParticiparModalComponent]
})
export class ParticiparModalComponentModule {}