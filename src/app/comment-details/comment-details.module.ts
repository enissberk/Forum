import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentDetailsPageRoutingModule } from './comment-details-routing.module';

import { CommentDetailsPage } from './comment-details.page';
import { ModalComponent } from '../components/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommentDetailsPageRoutingModule
  ],
  declarations: [
    CommentDetailsPage,
    ModalComponent
  ]
})
export class CommentDetailsPageModule {}
