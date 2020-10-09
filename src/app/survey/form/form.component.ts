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
  selectedQues: number;
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
      this.selectedQues = selectionState.pageNo;
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
    console.log(this.formObj);
  }

  deleteQuestion(index: number){
    this.page.questions.splice(index, 1);
    this.formDataService.setFormData(this.formObj);
  }

  isRequired(index: number){
    this.page.questions[index].required = !this.page.questions[index].required;
    this.formDataService.setFormData(this.formObj);
  }

  showHideQuestionInfo(index: number){
    this.page.questions[index].hideInfo = !this.page.questions[index].hideInfo;
    this.formDataService.setFormData(this.formObj);
  }

  questionChanged(index: number){
    if(this.selectedQues != index){
      this.currentSelectionService.setSelectedObj({
        pageNo: this.pageNo,
        questionNo: index,
        currSelection: "question"
      })
    }
  }

  ngOnDestroy(){
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

}
  // https://angular.io/guide/dynamic-form

