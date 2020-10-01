import { Component, OnInit } from '@angular/core';
import { Input } from '../models/input.model';

@Component({
  selector: 'app-form-inputs',
  templateUrl: './form-inputs.component.html',
  styleUrls: ['./form-inputs.component.css']
})
export class FormInputsComponent implements OnInit {

  inputs = ["textField", "textArea", "checkbox", "dropdown", "radio"]

  constructor() { }

  ngOnInit() {
  }

  inputClicked(event: Event){
    console.log(event)
  }

}
