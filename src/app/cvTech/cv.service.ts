import { Injectable } from '@angular/core';
import {Personne} from './Model/personne';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  apiLink = 'http://localhost:3000/api/personnes';
  private getPersonneObservable: Observable<Personne []>;
  constructor(
    private http: HttpClient
  ) {
    this.getPersonneObservable = this.http.get<Personne[]>(this.apiLink).pipe();
  }
  getPersonnes(): Observable<Personne[]> {
   return this.getPersonneObservable;
  }
  getPersonneById(id): Observable<Personne> {
    return this.http.get<Personne>(this.apiLink + `/${id}`);
  }
  addPersonne(personne: Personne) {
    const token = localStorage.getItem('user');
    if (token) {
      const headers = new HttpHeaders().append('Authorization', token);
      return this.http.post(this.apiLink, personne, {headers});
    } else {
      return this.http.post(this.apiLink, personne);
    }
  }
  deletePersonne(id: number) {
    return this.http.delete(this.apiLink + `/${id}`);
  }
}
