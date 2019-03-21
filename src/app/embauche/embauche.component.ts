import { Component, OnInit } from '@angular/core';
import {Personne} from '../cvTech/Model/personne';
import {EmbaucheService} from '../embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {

  embauchees: Personne[];
  constructor(
    private embaucheService: EmbaucheService
  ) { }

  ngOnInit() {
    this.embauchees = this.embaucheService.getEmbauchees();
  }

}
