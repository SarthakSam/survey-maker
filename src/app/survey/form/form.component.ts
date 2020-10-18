import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CurrentSelectionService } from '../current-selection.service';
import { FormDataService } from '../form-data.service';
import { Form } from '../models/form.model';
import { SelectionState } from '../models/general.model';
import { Page } from '../models/page.model';
import { Question } from '../models/question.model';

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
      this.createForm(); 
    }) );
    this.subscriptions.push( this.currentSelectionService.getSelectedObj().subscribe( (selectionState: SelectionState) => {
      this.pageNo = selectionState.pageNo;
      this.selectedQues = selectionState.pageNo;
      this.createForm();
    }) );
  }

  createForm() {
    let formGroupObj = {};
    this.page = this.formObj.pages[this.pageNo];
    Object.keys(this.page).forEach( key => {
      formGroupObj[key] = new FormControl(this.page[key]);
    });
    let questionsObj = {};
    this.page.questions.forEach( question => {
      questionsObj[question.key] = new FormControl("");
    })
    formGroupObj["questions"] = new FormGroup( questionsObj );
    this.form = new FormGroup( formGroupObj );
    // console.log(this.formObj, this.form, formGroupObj["questions"]);
    // console.log(this.form.get('questions'))
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

  propertyChanged(event, key: string){
    this.page[key] = event;
    // this.formObj[key] = event;
    this.formDataService.setFormData(this.formObj);
  }

  ngOnDestroy(){
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

}

