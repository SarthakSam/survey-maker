import { Component, OnInit } from '@angular/core';
import { CurrentSelectionService } from '../current-selection.service';
import { FormDataService } from '../form-data.service';
import { Form } from '../models/form.model';
import { Page } from '../models/page.model';

@Component({
  selector: 'app-pages-tab',
  templateUrl: './pages-tab.component.html',
  styleUrls: ['./pages-tab.component.css']
})
export class PagesTabComponent implements OnInit {

  pagesList: Page[];
  currentPage: number = 0;

  constructor(private formDataService: FormDataService, private currentSelectionService: CurrentSelectionService) {
   }

  ngOnInit() {
    this.formDataService.getFormData().subscribe( (form: Form) => {
      this.pagesList = form.pages;
    })
    this.currentSelectionService.getSelectedObj().subscribe( ( obj) => {
      this.currentPage = obj.pageNo;
    })
  }

  addPage(){
    this.formDataService.addPage();
  }

  changePage(pageNo: number){
    this.currentSelectionService.changePage(pageNo); 
  }

  pageSelected(event: any){
    if(+event.target.value === -1)
      this.addPage();
    else
      this.changePage(event.target.value);
  }

}
