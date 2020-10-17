import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editable-input',
  templateUrl: './editable-input.component.html',
  styleUrls: ['./editable-input.component.css']
})
export class EditableInputComponent implements OnInit {
  @Input('form') form: FormGroup;
  @Input('controlName') controlName: string;
  @Input(' placeholder') placeholder: string;
  editable: boolean = false;
  fontSize = 20;

  constructor() { }

  ngOnInit() {
    // console.log(this.controlName, this.form.get('name'))
  }

}
