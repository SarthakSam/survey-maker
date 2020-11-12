import { Component, OnInit } from '@angular/core';
import { FormDataService } from './form-data.service';
import { Form } from './models/form.model';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    // this.formDataService.setFormData( JSON.parse(localStorage.form) );
    this.formDataService.createNewForm();
  }

}
