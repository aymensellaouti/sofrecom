import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  nom: string;
  prenom: string;
  constructor() { }

  ngOnInit() {
  }
  getSonData(data) {
    this.nom = data.name;
    this.prenom = data.firstname;
  }

}
