import { Page } from './page.model';
export interface Form{
    title: string;
    description: string;
    companyLogoUrl: string;
    pages: Page[];
    correctAns: any;
}

