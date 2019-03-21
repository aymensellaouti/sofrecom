import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CvService} from '../cv.service';
import {Personne} from '../Model/personne';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
    ) { }
  personne: Personne;
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (monParam) => {
        const reponse = this.cvService.getPersonneById(monParam.id);
        if (reponse) {
          this.personne = reponse;
        } else {
          const link = [''];
          this.router.navigate(link);
        }
      },
      (erreur) => {
        console.log(erreur);
      },
      () => {
        console.log('j ai terminé');
      }
    );
  }

}
