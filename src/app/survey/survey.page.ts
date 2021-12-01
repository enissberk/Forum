import { Component, OnInit } from '@angular/core';
import * as DataService from '../services/bucket'

@Component({
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
})
export class SurveyPage implements OnInit {

  survey: DataService.Survey[] = [];
  // _vote(): DataService.Survey[];

  constructor() {
    DataService.initialize({ apikey: "2n1c1akvupiku4" })
  }
  async ngOnInit() {
    await this.getSurvey()
  }


  async _vote(id, option) {
    let patchedData;
    this.survey.forEach(el => {
      if (el._id == id) {
        el.selections.forEach(v => {
          if (v.option == option) {
            v.total_votes += 1;
          }
        })
        patchedData = el;
      }
    })

    DataService.survey.patch({_id: id, selections: patchedData.selections})
  }

  async getSurvey() {
    DataService.survey.getAll({ queryParams: { relation: true } }).then((res) => {
      this.survey = res;
      // console.log(this.survey)
    })
  }


}
