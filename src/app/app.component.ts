import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _router: Router, private menu: MenuController) {

  }
  ngOnInit() {
    this._router.navigate(["/home"])
  }

  onMenuClick(){
    this.menu.close()
  }
}
