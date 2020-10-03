import { Component, OnInit } from '@angular/core';
import { FormField } from './models/form-field.model';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  field: FormField; 
  constructor() { }

  ngOnInit() {
  }

  addField(field){
    this.field = field;
  }

}
