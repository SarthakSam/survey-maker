import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form } from './models/form.model';
import { FormField } from './models/form-field.model';
import { CurrentSelectionService } from './current-selection.service';
import { SelectionState } from './models/general.model';
import { TextBoxQuestion } from './models/questionTypes/question-textBox';
import { DropdownQuestion } from './models/questionTypes/question-dropdown';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  form: Form = null;
  form$: BehaviorSubject<Form> = new BehaviorSubject<Form>(null); 
  currentSelectionObj: SelectionState;

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
      case 'textField': elem = new TextBoxQuestion("Question" + this.form.totalQues, "Question" + this.form.totalQues);
                        break;
      case 'dropdown': elem = new DropdownQuestion("Question" + this.form.totalQues, "Question" + this.form.totalQues);
                        break;
     }
     this.form.pages[this.currentSelectionObj.pageNo].questions.splice(index, 0, elem);
     this.setFormData(this.form);
   }


}
