import { Question } from '../question.model';
import { LabelValuePair } from '../general.model';

export class CheckboxQuestion extends Question{
    readonly controlType = 'checkbox';
    options: LabelValuePair[];
    constructor(title: string, key: string, index: number){
        super(title,key, index);
        this.options = [
            new LabelValuePair("item1", "item1"),
            new LabelValuePair("item2", "item2"),
            new LabelValuePair("item3", "item3")
        ];
    }
}