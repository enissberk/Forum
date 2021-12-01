import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { data } from '@spica-devkit/bucket';
import { queue } from 'rxjs';
import { ModalComponent } from '../components/modal/modal.component';
import * as DataService from '../services/bucket'

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.page.html',
  styleUrls: ['./comment-details.page.scss'],
})
export class CommentDetailsPage implements OnInit {
  id: any;
  user: DataService.User[] = [];
  comment: DataService.Comment;
  fromModal: any;

  constructor(private activatedRoute: ActivatedRoute, private modalCtrl: ModalController) {
    DataService.initialize({ apikey: "2n1c1akvupiku4" })
  }

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    // console.log("id", this.id);
    await this.getUser()
    await this.getComment()
  }

  async _openModal() {
    // console.log("open modal")
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      cssClass:'modal-component-css'
    })
    modal.onDidDismiss().then((data: any) => {
      if(data.data)
      this.fromModal = data.data.fromModal;
    })
    return await modal.present();
  }

  async getUser() {
    DataService.user.getAll().then((res) => {
      this.user = res;
      // console.log(this.user)
    })
  }

  async getComment() {
    DataService.comment.get(this.id, { queryParams: { relation: true } }).then((res) => {
      this.comment = res;
      // console.log(this.comment)
    })
  }
}