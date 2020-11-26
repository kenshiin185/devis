import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurAuth } from '../models/utilisateurAuth';
import { UtilisateurService } from '../services/utilisateur.service';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  utilisateur: UtilisateurAuth = { mailUtilisateur: '', passwordUtilisateur: '' }
  _id: string = "";
  constructor(
    private utilisateurService: UtilisateurService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  authUtilisateur() {
    this.utilisateurService.authUtilisateur(this.utilisateur).subscribe(
      (data: Utilisateur) => {
        this.handleSuccess(data)
      },
      error => this.handleError(error));
  }


  handleSuccess(data) {
    this._id = data._id;
    this.router.navigate(['/espace-utilisateur/', this._id]);
  }

  handleError(error) {
    console.error('Vous n\'êtes pas loggé :(');
  }

}
