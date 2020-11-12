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
import { Question } from './models/question.model';
import { NextKeyService } from './next-key.service';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  form: Form = null;
  form$: BehaviorSubject<Form> = new BehaviorSubject<Form>(null); 
  currentSelectionObj: SelectionState;
  nextPageIndexService: NextKeyService;
  nextQuestionIndexService: NextKeyService;

  constructor(private currentSelectionService: CurrentSelectionService) {
    this.currentSelectionService.getSelectedObj().subscribe((obj: SelectionState) => {
      this.currentSelectionObj = obj;
    })
    this.nextPageIndexService = new NextKeyService();
    this.nextQuestionIndexService = new NextKeyService(); 
   }

   getFormData(): Observable<Form>{
      return this.form$.asObservable();
   }

   setFormData(form: Form){
     this.form = form;
     this.form$.next( form );
   }

   createNewForm() {
    this.setFormData( new Form() );
    this.addPage();
   }

   addQuestion(input: FormField){
     this.form.totalQues++;
     const index = this.currentSelectionObj.currSelection !== 'page' ? this.currentSelectionObj.questionIndex + 1: this.form.pages[this.currentSelectionObj.pageNo].questions.length;
     const key = this.nextQuestionIndexService.nextKey() + 1;
     let elem: Question;
     switch(input.controlType){
      case 'textfield': elem = new TextBoxQuestion("Question" + key, "Question" + key, key);
                        break;
      case 'dropdown': elem = new DropdownQuestion("Question" + key, "Question" + key, key);
                        break;
      case 'checkbox': elem = new CheckboxQuestion("Question" + key, "Question" + key, key);
                        break;
      case 'textarea': elem = new TextareaQuestion("Question" + key, "Question" + key, key);
                        break;
      case 'radio':    elem = new RadioQuestion("Question" + key, "Question" + key, key);
                        break;                        
     }
     if(elem)
       this.form.pages[this.currentSelectionObj.pageNo].questions.splice(index, 0, elem);
     this.setFormData(this.form);
     this.currentSelectionService.setSelectedObj({
      pageNo: this.currentSelectionObj.pageNo,
      questionIndex: index,
      currSelection: "question"
    })
   }

   deleteQuestion(pageNo: number, index: number){
      const ques = this.form.pages[pageNo].questions.splice(index, 1)[0];
      this.form.totalQues--;
      this.setFormData(this.form);
      this.nextQuestionIndexService.addKey(ques.index - 1);
   }

   addPage(){
     const pageKey = this.nextPageIndexService.nextKey();
     this.form.pages.push( new Page("Page " + (pageKey + 1) ) );
     this.setFormData(this.form);
     this.currentSelectionService.changePage(this.form.pages.length - 1);
   }

}
