import { Question } from './question.model';

export class Page{
    title: string;
    description: string;
    isVisible: boolean;
    maxTimeToFinish: number;
    questions: Question[];
    constructor(title: string){
        this.title = title;
        this.isVisible = true;
        this.questions = [];
    }
}