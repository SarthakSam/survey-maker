import { Injectable } from '@angular/core';
import { FormField } from '../models/form-field.model';

@Injectable({
  providedIn: 'root'
})
export class InputTypesService {

  inputs : FormField[] = [
    new FormField("textField","fas fa-text-width","" ),
    new FormField("textArea","fas fa-text-width","" ),
    new FormField("checkbox","fas fa-text-width","" ),
    new FormField("dropdown","fas fa-text-width","" ),
    new FormField("radio","fas fa-text-width","" )
  ]

  constructor() { }

  getInputTypes() : FormField[]{
    return this.inputs;
  }

}
