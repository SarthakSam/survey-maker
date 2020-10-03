import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { InputTypesService } from './input-types.service';
import { FormField } from '../models/form-field.model';
import { CurrentSelectionService } from '../current-selection.service';

@Component({
  selector: 'app-form-inputs',
  templateUrl: './form-inputs.component.html',
  styleUrls: ['./form-inputs.component.css']
})
export class FormInputsComponent implements OnInit {

  @Output() addField: EventEmitter<FormField> = new EventEmitter<FormField>();
  formFields: FormField[];


  constructor(private inputTypesService: InputTypesService, private currentSelectionService: CurrentSelectionService) { 
    this.formFields = inputTypesService.getInputTypes();
  }

  ngOnInit() {
  }

  inputClicked(event: Event){
    this.addField.next(event);
  }

}
