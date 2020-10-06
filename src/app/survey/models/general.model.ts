export interface SelectionState{
    pageNo: number;
    questionNo: number;
    currSelection: string;
}

export class LabelValuePair{
    constructor(private label: string, private value: string){}
}