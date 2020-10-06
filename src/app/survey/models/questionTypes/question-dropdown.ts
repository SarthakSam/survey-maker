import { Question } from '../question.model';
import { LabelValuePair } from '../general.model';

export class DropdownQuestion extends Question{
    readonly controlType = 'dropdown';
    options: LabelValuePair[];
    constructor(title: string, key: string){
        super(title,key);
        this.options = [
            new LabelValuePair("item1", "item1"),
            new LabelValuePair("item2", "item2"),
            new LabelValuePair("item3", "item3")
        ];
    }
}