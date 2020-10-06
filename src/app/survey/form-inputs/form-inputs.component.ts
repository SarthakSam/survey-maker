import { Component, OnInit } from '@angular/core';
import { InputTypesService } from './input-types.service';
import { FormField } from '../models/form-field.model';
import { CurrentSelectionService } from '../current-selection.service';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-form-inputs',
  templateUrl: './form-inputs.component.html',
  styleUrls: ['./form-inputs.component.css']
})
export class FormInputsComponent implements OnInit {

  formFields: FormField[];


  constructor(private inputTypesService: InputTypesService, private formDataService: FormDataService) { 
    this.formFields = inputTypesService.getInputTypes();
  }

  ngOnInit() {
  }

  inputClicked(event: FormField){
    this.formDataService.addInput(event);
  }

}
