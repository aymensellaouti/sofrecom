import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor() { }

  @HostBinding('style.backgroundColor') bg = 'red';
  @HostListener('mouseenter') enter() {
    this.bg = 'yellow';
  }
  @HostListener('mouseleave') leave() {
    this.bg = 'red';
  }
}
