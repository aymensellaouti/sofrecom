import { Injectable } from '@angular/core';
import {Personne} from './Model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 36, 'as.jpg', 'teacher', 1234),
      new Personne(2, 'ben mohamed', 'ahmed', 26, '', 'developer', 5678),
      new Personne(2, 'ben mohamed', 'ahmed', 26, '', 'developer', 5678),
    ];
  }
  getPersonnes(): Personne[] {
   return this.personnes;
  }
}
