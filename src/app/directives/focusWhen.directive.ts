import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[focusWhen]'
})
export class FocusWhenDirective implements OnInit{
    constructor(private element: ElementRef){}

    ngOnInit(){
        this.element.nativeElement.focus();
    }
}