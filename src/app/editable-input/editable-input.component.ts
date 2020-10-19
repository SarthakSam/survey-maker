import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input('fontSize') fontSize: number;
  editable: boolean = false;
  @Output('valueChanged') valueEmit = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(){
    // console.log(this.controlName);
    // console.log()
  }

  ngOnInit() {
    // console.log(this.controlName, this.form.get('name'))
  }

  onBlur(){
    this.editable = false;
    this.valueEmit.emit(this.form.value[this.controlName] );
  }

}
