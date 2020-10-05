import { Question } from '../question.model';

export class TextBoxQuestion extends Question{
    controlType: 'textbox';
    constructor(title: string, key: string){
        super(title,key);
    }
}