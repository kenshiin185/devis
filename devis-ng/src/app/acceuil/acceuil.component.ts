import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurAuth } from '../models/utilisateurAuth';
import { UtilisateurService } from '../services/utilisateur.service';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  loginForm: FormGroup;
  token:string="";
  _id: string = "";
  constructor(
    private utilisateurService: UtilisateurService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
   
    this.loginForm = this.formBuilder.group({
      mailUtilisateur: [null, [Validators.required, Validators.email]],
      passwordUtilisateur: [null, [Validators.required]]
    });
  }
  onLogin() {
    const mailUtilisateur = this.loginForm.get('mailUtilisateur').value;
    const passwordUtilisateur = this.loginForm.get('passwordUtilisateur').value;
    this.utilisateurService.login(mailUtilisateur, passwordUtilisateur).then(
      () => {
        this._id = this.utilisateurService.userId;
        this.token = this.utilisateurService.token;
        this.router.navigate(['/espace-utilisateur', this._id]);
        console.log('token passé !!!', this.token);
        console.log('id passé !!!', this._id);
      }
    ).catch(
      (error) => {
        console.log('erreur de connexion ' + error);
      }
    );
  }
}
