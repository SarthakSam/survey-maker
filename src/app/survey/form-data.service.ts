import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form } from './models/form.model';
import { FormField } from './models/form-field.model';
import { CurrentSelectionService } from './current-selection.service';
import { SelectionState } from './models/general.model';
import { TextBoxQuestion } from './models/questionTypes/question-textBox';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  form: Form; 
  currentSelectionObj: SelectionState;

  constructor(private currentSelectionService: CurrentSelectionService) {
    // this.form = new Form();
    this.currentSelectionService.getSelectedObj().subscribe((obj: SelectionState) => {
      this.currentSelectionObj = obj;
    })
   }

   getFormData(): Form{
      return this.form;
   }

   setFormData(form: Form){
     this.form = form;
   }

   addInput(input: FormField){
     this.form.totalQues++;
     const index = this.currentSelectionObj.currSelection !== 'pageNo' ? this.currentSelectionObj.questionNo: this.form.pages[this.currentSelectionObj.pageNo].questions.length;
     const elem = new TextBoxQuestion("Question" + this.form.totalQues, "Question" + this.form.totalQues)
     this.form.pages[this.currentSelectionObj.pageNo].questions.splice(index, 0, elem);
     console.log(this.form);
   }


}
