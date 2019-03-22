import { Injectable } from '@angular/core';
import {Personne} from './Model/personne';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  apiLink = 'http://localhost:3000/api/personnes';
  private personnes: Personne[];
  private getPersonneObservable: Observable<Personne []>;
  constructor(
    private http: HttpClient
  ) {
    this.getPersonneObservable = this.http.get<Personne[]>(this.apiLink);
  }
  getPersonnes(): Observable<Personne[]> {
   return this.getPersonneObservable;
  }
  getPersonneById(id): Personne {
    const personne = this.personnes.find(response => response.id == id);
    if (!personne) {
      return null;
    }
    return personne;
  }
}
