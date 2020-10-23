
export class Question{
    title: string;
    description?: string;
    required?: boolean;
    readonly?: boolean;
    visible: boolean;
    correctAns?: any;
    note?: string;
    key: string;
    placeholder?: string;
    hideInfo?: boolean;
    index: number

    constructor(title: string, key: string, index: number){
        this.title = title;
        this.visible = true;
        this.key = key; // used as key value for ans
        this.index = index; // every element has an index
        this.description = null;
        this.required = false;
        this.readonly = false;
        this.correctAns = "";
        this.note = null;
        this.placeholder = null;
        this.hideInfo = false;
    }
}