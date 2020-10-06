export class FormField{
    controlType: string;
    label: string;
    icon?: string;
    image?: string;
    constructor(controlType: string, label: string, icon: string, image: string){
        this.controlType = controlType;
        this.label = label;
        this.icon = icon;
        this.image = image;
    }
}