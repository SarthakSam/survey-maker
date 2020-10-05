import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CurrentSelectionService } from '../current-selection.service';
import { FormField } from '../models/form-field.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  
  @Input() addedField: FormField;

  constructor(private currentSelectionService: CurrentSelectionService) { }

  ngOnChanges(changes: SimpleChange){
    if(!changes['addedField'].firstChange){
      this.addField();
    }
  }

  ngOnInit() {
    this.form = new FormGroup({});
  }

  addField(){
    console.log(this.addedField)
    // this.form.addControl('', [);
  }


}
  // https://angular.io/guide/dynamic-form

