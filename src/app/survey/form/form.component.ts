import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CurrentSelectionService } from '../current-selection.service';
import { FormDataService } from '../form-data.service';
import { Form } from '../models/form.model';
import { SelectionState } from '../models/general.model';
import { Page } from '../models/page.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  page: Page;
  formObj: Form
  pageNo: number;
  subscriptions: Subscription[];

  constructor(private currentSelectionService: CurrentSelectionService, private formDataService: FormDataService) {
    this.subscriptions = [];
   }

  ngOnInit() {
    this.form = new FormGroup({});
    this.pageNo = 0;
    this.subscriptions.push( this.formDataService.getFormData().subscribe( (form: Form) => {
      this.formObj = form;
      this.fillFormObj(); 
    }) );
    this.subscriptions.push( this.currentSelectionService.getSelectedObj().subscribe( (selectionState: SelectionState) => {
      this.pageNo = selectionState.pageNo;
      this.fillFormObj();
    }) );
  }

  fillFormObj() {
    this.page = this.formObj.pages[this.pageNo];
    let obj = {};
    this.page.questions.forEach( question => {
      obj[question.key] = new FormControl("");
    })
    this.form = new FormGroup(obj);
    console.log(this.form, this.page);
  }

  ngOnDestroy(){
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

}
  // https://angular.io/guide/dynamic-form

