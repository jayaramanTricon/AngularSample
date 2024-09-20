import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicsHighlight]'
})
export class BasicsHighlightDirective implements OnInit {

  constructor(
    private elementRef : ElementRef
  ) { }

  ngOnInit() {
      this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

}
