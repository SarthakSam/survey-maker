import { Input } from './input.model';

export class Page{
    title: string;
    description: string;
    isVisible: boolean;
    maxTimeToFinish: number;
    questions: Input[];
    constructor(title: string){
        this.title = title;
        this.isVisible = true;
    }
}