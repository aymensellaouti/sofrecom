import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../Model/personne';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  personnes: Personne [];
  @Output() selectedPersonne = new EventEmitter();
  constructor(
    private cvService: CvService
  ) { }
  ngOnInit() {
    this.personnes = this.cvService.getPersonnes();
  }

  selectPersonne(selectedPersonne) {
    this.selectedPersonne.emit(
      selectedPersonne
    );
  }

}
