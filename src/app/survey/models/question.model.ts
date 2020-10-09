
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
        this.key = key;
        this.index = index;
    }
}