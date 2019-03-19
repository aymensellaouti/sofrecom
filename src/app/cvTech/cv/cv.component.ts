import { Component, OnInit } from '@angular/core';
import {Personne} from '../Model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes: Personne [];
  selectedPersonne: Personne;
  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 36, 'as.jpg', 'teacher', 1234),
      new Personne(2, 'ben mohamed', 'ahmed', 26, 'cv.gif', 'developer', 5678),
      new Personne(2, 'ben mohamed', 'ahmed', 26, 'cv.gif', 'developer', 5678),
    ];
  }

  selectPersonne(selectedPersonne) {
    this.selectedPersonne = selectedPersonne;
  }

}
