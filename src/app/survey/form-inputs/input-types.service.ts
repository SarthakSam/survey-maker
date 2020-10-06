import { Injectable } from '@angular/core';
import { FormField } from '../models/form-field.model';

@Injectable({
  providedIn: 'root'
})
export class InputTypesService {

  inputs : FormField[] = [
    new FormField("textField", "Text Field","fas fa-text-width","" ),
    new FormField("textArea", "Text Area","fas fa-text-width","" ),
    new FormField("checkbox", "CheckBox","fas fa-text-width","" ),
    new FormField("dropdown", "Dropdown","fas fa-text-width","" ),
    new FormField("radio", "Radio","fas fa-text-width","" )
  ]

  constructor() { }

  getInputTypes() : FormField[]{
    return this.inputs;
  }

}
