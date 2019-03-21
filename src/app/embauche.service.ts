import { Injectable } from '@angular/core';
import {Personne} from './cvTech/Model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private embauchees: Personne[];
  constructor() {
    this.embauchees = [];
  }
  embaucher(personne: Personne) {
    const index = this.embauchees.indexOf(personne);
    if (index === -1) {
      this.embauchees.push(personne);
    } else {
      alert(`La personne ${personne.name}
       est déjà ajoutée à la liste des personnes préselectionnées`
      );
    }
  }
  getEmbauchees(): Personne[] {
    return this.embauchees;
  }
}
