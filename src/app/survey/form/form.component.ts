import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
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
      this.selectedQues = selectionState.questionIndex;
      this.createForm();
    }) );
  }

  createForm() {
    let reactiveFormObject = {};
    this.page = this.formObj.pages[this.pageNo];
    Object.keys(this.page).forEach( key => {
      reactiveFormObject[key] = new FormControl(this.page[key]);
    });

    reactiveFormObject['questions'] = new FormArray([]);
    this.page.questions.forEach( (question: Question) => {
      reactiveFormObject['questions'].push( this.createFormGroup( question) );
    })
    this.form = new FormGroup( reactiveFormObject );
    // console.log(this.form.get('questions').get('0'))
    // console.log(reactiveFormObject);

  }

  createFormGroup( question: Question ): FormGroup{
    let obj = {};
    Object.keys(question).forEach( (key: string) => {
      obj[key] = new FormControl(question[key]);
    });
    return new FormGroup(obj);
  }

  deleteQuestion(index: number){
    this.formDataService.deleteQuestion(this.pageNo, index);
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
        questionIndex: index,
        currSelection: "question"
      })
    }
  }

  propertyChanged(event, key: string){
    this.page[key] = event;
    this.formDataService.setFormData(this.formObj);
  }

  saveForm(){
    this.formDataService.setFormData(this.formObj);
  }

  ngOnDestroy(){
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

}

