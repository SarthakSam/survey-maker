import { Question } from '../question.model';

export class TextBoxQuestion extends Question{
    readonly controlType = 'textbox';
    constructor(title: string, key: string, index: number){
        super(title, key, index);
    }
}