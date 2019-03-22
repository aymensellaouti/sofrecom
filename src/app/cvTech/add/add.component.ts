import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CvService} from '../cv.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  addPersonne(form: NgForm) {
    this.cvService.addPersonne(form.value).subscribe(
      (reponse) => {
        this.router.navigate(['']);
      },
      (erreur) => {
        console.log(erreur);
      }
    );
  }

}
