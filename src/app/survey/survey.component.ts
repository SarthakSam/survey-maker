import { Component, OnInit } from '@angular/core';
import { FormDataService } from './form-data.service';
import { FormField } from './models/form-field.model';
import { Form } from './models/form.model';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  field: FormField; 
  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    this.formDataService.setFormData( new Form() );
  }

  addField(field){
    this.field = field;
  }

}
