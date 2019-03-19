import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

   private colors = [
    'red',
    'gold',
    'lightred',
    'lightgray',
    'pink',
    'yellow',
    'purple',
    'lightgreen',
    'bluesky',
    'lightblue'
  ];
  @Input() tableSize = this.colors.length;
  constructor() { }

  @HostBinding('style.color') color = 'red';
  @HostBinding('style.borderColor') borderColor = 'red';
  @HostListener('keypress') changeColor() {
    const index = Math.floor(Math.random() * (this.tableSize - 1));
    this.color = this.colors[index];
    this.borderColor = this.colors[index];
  }
}
