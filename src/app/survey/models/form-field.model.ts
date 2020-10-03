export class FormField{
    type: string;
    icon?: string;
    image?: string;
    constructor(type: string, icon: string, image: string){
        this.type = type;
        this.icon = icon;
        this.image = image;
    }
}