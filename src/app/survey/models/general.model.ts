export interface SelectionState{
    pageNo: number;
    questionIndex: number;
    currSelection: string;
}

export class LabelValuePair{
    constructor(private label: string, private value: string){}
}