import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../Model/personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Input() personnes: Personne [];
  @Output() selectedPersonne = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.personnes);
  }

  selectPersonne(selectedPersonne) {
    this.selectedPersonne.emit(
      selectedPersonne
    );
  }

}
