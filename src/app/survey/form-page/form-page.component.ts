import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CurrentSelectionService } from '../current-selection.service';
import { FormField } from '../models/form-field.model';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {
  
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
    // this.form.addControl('', [);
  }

}
