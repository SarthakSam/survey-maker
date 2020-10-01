
export class Input{
    title: string;
    description: string;
    required: boolean;
    readonly: boolean;
    visible: boolean;
    correctAns: any;
    type: string;
    icon: string;

    constructor(title: string, type: string){
        this.title = title;
        this.visible = true;
        this.type = type;
    }
}