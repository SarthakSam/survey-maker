import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Form } from './models/form.model';
import { FormField } from './models/form-field.model';
import { CurrentSelectionService } from './current-selection.service';
import { SelectionState } from './models/general.model';
import { TextBoxQuestion } from './models/questionTypes/question-textBox';
import { DropdownQuestion } from './models/questionTypes/question-dropdown';
import { TextareaQuestion } from './models/questionTypes/question-textarea';
import { CheckboxQuestion } from './models/questionTypes/question-checkbox';
import { RadioQuestion } from './models/questionTypes/question-radio';
import { Page } from './models/page.model';
import { DropDownOption } from './models/dropDownOptions.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  form: Form = null;
  form$: BehaviorSubject<Form> = new BehaviorSubject<Form>(null); 
  currentSelectionObj: SelectionState;
  formElements: DropDownOption[] = null;
  formElements$: BehaviorSubject<DropDownOption[]> = new BehaviorSubject<DropDownOption[]>(null);

  constructor(private currentSelectionService: CurrentSelectionService) {
    this.currentSelectionService.getSelectedObj().subscribe((obj: SelectionState) => {
      this.currentSelectionObj = obj;
    })
   }

   getFormData(): Observable<Form>{
      return this.form$.asObservable();
   }

   setFormData(form: Form){
     this.form = form;
     this.form$.next( form );
   }

   addInput(input: FormField){
     this.form.totalQues++;
     const index = this.currentSelectionObj.currSelection !== 'pageNo' ? this.currentSelectionObj.questionNo: this.form.pages[this.currentSelectionObj.pageNo].questions.length;
     let elem;
     switch(input.controlType){
      case 'textfield': elem = new TextBoxQuestion("Question" + this.form.totalQues, "Question" + this.form.totalQues, this.form.totalQues);
                        break;
      case 'dropdown': elem = new DropdownQuestion("Question" + this.form.totalQues, "Question" + this.form.totalQues, this.form.totalQues);
                        break;
      case 'checkbox': elem = new CheckboxQuestion("Question" + this.form.totalQues, "Question" + this.form.totalQues, this.form.totalQues);
                        break;
      case 'textarea': elem = new TextareaQuestion("Question" + this.form.totalQues, "Question" + this.form.totalQues, this.form.totalQues);
                        break;
      case 'radio':    elem = new RadioQuestion("Question" + this.form.totalQues, "Question" + this.form.totalQues, this.form.totalQues);
                        break;                        
     }
     if(elem)
       this.form.pages[this.currentSelectionObj.pageNo].questions.splice(index, 0, elem);
     this.setFormData(this.form);
   }

   addPage(){
     this.form.pages.push( new Page("Page " + (this.form.pages.length + 1) ) );
     this.setFormData(this.form);
     this.currentSelectionService.changePage(this.form.pages.length - 1);
   }

   getFormElements(): Observable<DropDownOption[]> {
     return this.formElements$.asObservable();
   }

   setFormElements(){
    this.formElements$.next( this.formElements );
   }

}
