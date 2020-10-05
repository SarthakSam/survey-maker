import { Page } from './page.model';
export class Form{
    title: string;
    description: string;
    companyLogoUrl: string;
    pages: Page[];
    correctAns: any;
    totalQues: number;
    constructor(){
        this.title = "";
        this.description = "";
        this.pages = [new Page("Page 1")];
        this.totalQues = 0;
    }
}

