import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurAuth } from '../models/utilisateurAuth';
import { UtilisateurService } from '../services/utilisateur.service';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
utilisateur : UtilisateurAuth = {mailUtilisateur:'', passwordUtilisateur:''}
  constructor(
    private utilisateurService: UtilisateurService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  authUtilisateur() {
    this.utilisateurService.authUtilisateur(this.utilisateur).subscribe(data => this.handleSuccess(data), error => this.handleError(error));
  }


  handleSuccess(data) {
    this.router.navigate(['/creation-article']);
  }

  handleError(error) {
    console.error('Vous n\'êtes pas loggé :(');
  }

}
