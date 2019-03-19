import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  couleur = 'lightgreen';
  two = 'init val';
  constructor() { }

  ngOnInit() {
  }
  showElement(element) {
    console.log(element);
  }
  changeColor(couleur) {
    this.couleur = couleur;
  }
}
