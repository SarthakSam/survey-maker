
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

    constructor(title: string, key: string){
        this.title = title;
        this.visible = true;
        this.key = key
    }
}