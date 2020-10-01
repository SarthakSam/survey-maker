import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-tab',
  templateUrl: './pages-tab.component.html',
  styleUrls: ['./pages-tab.component.css']
})
export class PagesTabComponent implements OnInit {

  pagesList: any[];

  constructor() {
    this.pagesList = ["page1"]
   }

  ngOnInit() {
  }

  addPage(){
    this.pagesList.push(`pages${this.pagesList.length + 1}`)
  }

  changePage(event: any){
    if(+event.target.value === -1)
      this.addPage();
  }

}
