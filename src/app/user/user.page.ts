import { Component, OnInit } from '@angular/core';
import * as DataService from '../services/bucket'

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  user: DataService.User;

  constructor() {
    DataService.initialize({ apikey: "2n1c1akvupiku4" })
  }

  async ngOnInit() {
    this.getUser()
  }
  async getUser() {
    this.user = await DataService.user.get("618ce953c76489002e9b624a");
    console.log(this.user);
  }
}
