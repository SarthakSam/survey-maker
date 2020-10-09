import { Question } from '../question.model';

export class TextareaQuestion extends Question{
    readonly controlType = 'textarea';
    rows: number = 30;
    columns: number = 10;
    constructor(title: string, key: string, index: number){
        super(title,key, index);
    }
}