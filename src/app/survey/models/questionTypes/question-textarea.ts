import { Question } from '../question.model';

export class TextareaQuestion extends Question{
    readonly controlType = 'textarea';
    rows: number;
    columns: number
    constructor(title: string, key: string){
        super(title,key);
    }
}