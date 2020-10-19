import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.css']
})
export class FormQuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() form: FormGroup;
  @Input() serialNo: number;
  @Output() saveForm = new EventEmitter<string>(); 
  constructor() { }

  ngOnChanges(){
    // console.log(this.form, this.question);
  }

  ngOnInit() {
  }

  valueChanged(event: string, title: string){
    this.question[title] = event;
    this.saveForm.emit(null);
  }

}
