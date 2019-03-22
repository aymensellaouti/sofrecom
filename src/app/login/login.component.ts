import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthentificationService} from '../service/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ) { }
  ngOnInit() {
  }
  login(formulaire: NgForm) {
    this.authentificationService.login(formulaire.value).subscribe(
      (response) => {
        localStorage.setItem('user', response['id']);
        this.router.navigate(['']);
      },
      (erreur) => {
        console.log(erreur);
      }
    );
  }

}
