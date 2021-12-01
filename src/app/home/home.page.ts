import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import * as DataService from '../services/bucket'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  category: DataService.Category[] = [];
  user: DataService.User[] = [];
  comment: DataService.Comment[] = [];
  survey: DataService.Survey[] = [];
  title: DataService.Title[] = [];

  constructor(private menu: MenuController) {
    DataService.initialize({ apikey: "2n1c1akvupiku4" })
  }

  async ngOnInit() {
    await this.getCategory()
    await this.getUser()
    await this.getTitle()
    await this.getComment()
    await this.getSurvey()
  }

  _openSideNav(){
    this.menu.enable(true,'main-menu')
    this.menu.open('main-menu')
  }

  async getCategory() {
    DataService.category.getAll().then((res) => {
      this.category = res;
      // console.log(this.category)
    })
  }

  async getUser() {
    DataService.user.getAll().then((res) => {
      this.user = res;
      // console.log(this.user)
    })
  }

  async getTitle() {
    DataService.title.getAll().then((res) => {
      this.title = res;
      // console.log(this.title)
    })
  }

  async getComment() {
    DataService.comment.getAll({queryParams : {relation: true}}).then((res) => {
      this.comment = res;
      // console.log(this.comment)
    })
  }

  async getSurvey() {
    DataService.survey.getAll().then((res) => {
      this.survey = res;
      // console.log(this.survey)
    })
  }
}
