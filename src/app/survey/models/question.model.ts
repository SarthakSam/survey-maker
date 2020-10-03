
export class Question{
    title: string;
    description: string;
    required: boolean;
    readonly: boolean;
    visible: boolean;
    correctAns: any;
    type: string;
    fieldName: string;

    constructor(title: string, type: string){
        this.title = title;
        this.visible = true;
        this.type = type;
    }
}