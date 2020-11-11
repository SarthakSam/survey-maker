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
  carouselHead: number = 0;

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

  ngAfterViewChecked() {
    this.alignPages();
  }

  alignPages() { 
    let position = 0;
    let pagesHTMLElem = document.querySelectorAll('.page');
    pagesHTMLElem.forEach( (page: HTMLElement) => {
      page.style.left = position + 'px';
      position += page.getBoundingClientRect().width + 10;
    })
  }

  carouselLeft() {
    if(this.carouselHead == 0)
      return;
    const currentSlide = document.querySelector('.carouselHead');
    const nextSlide = currentSlide.previousElementSibling;
    this.carouselHead--;
    this.moveToSlide(nextSlide)
  }

  carouselRight() {
    if(this.isEndOfCarousel())
        return;
    const currentSlide = document.querySelector('.carouselHead');
    const nextSlide = currentSlide.nextElementSibling;
    this.carouselHead++;
    this.moveToSlide(nextSlide)
  }

  isEndOfCarousel() {
    const carouselWidth: number = document.querySelector('.carousel').clientWidth;
    const slides = document.querySelectorAll('.page');
    const lastSlide = slides[slides.length - 1];
    const currentSlide = document.querySelector('.carouselHead');
    const lastSlidePos = (<HTMLElement>lastSlide).style.left;
    const curSlidePos = (<HTMLElement>currentSlide).style.left;
    return +curSlidePos.substring(0, curSlidePos.length - 2) + carouselWidth >= +lastSlidePos.substring(0, lastSlidePos.length - 2) + lastSlide.getBoundingClientRect().width
  }

  moveToSlide(targetSlide: Element) {
    let carousel: HTMLElement = document.querySelector('.carousel');
    const position = (<HTMLElement>targetSlide).style.left;
    carousel.style.transform = `translateX(-${position})`

}

  addPage(){
    this.formDataService.addPage();
  }

  nextPage(){
      if( this.currentPage + 1 < this.pagesList.length){
        this.changePage( this.currentPage + 1);
      }
  }

  prevPage(){
    if( this.currentPage - 1 < this.pagesList.length){
      this.changePage( this.currentPage - 1);
    }
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
