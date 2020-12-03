import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective} from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm:FormGroup
  constructor(
    private formBuilder:FormBuilder,
    private utilisateurService: UtilisateurService,
    private router:Router
  ) { }

  ngOnInit() {
    this.subForm();
  }

  subForm() {
    this.inscriptionForm = this.formBuilder.group({
      raisonSocialeUtilisateur:'',
      civiliteUtilisateur:'',
      nomUtilisateur:'',
      prenomUtilisateur:'',
      adresseUtilisateur:'',
      codePostalUtilisateur:'',
      villeUtilisateur:'',
      telUtilisateur:'',
      mailUtilisateur:'',
      passwordUtilisateur:'',
      capitalSocialUtilisateur:'',
      siretUtilisateur:'',
      sirenUtilisateur:'',
      tvaIntraCommunautaireUtilisateur:'',
      actif:false,
      dateInscriptionUtilisateur:new Date(Date.now()),
      rgpd:'',
    });
  }
  inscription(formDirective: FormGroupDirective) {
    if (this.inscriptionForm.valid) {
      console.log('infos enregistrée: ' + this.inscriptionForm.value);
      this.utilisateurService.createUtilisateur(this.inscriptionForm.value)
      .subscribe(data => this.handleSuccess(data, formDirective),error => this.handleError(error));
    }
  }

  handleSuccess(data, formDirective) {
    this.utilisateurService.dispatchUtilisateurCreated(data._id);
    console.log(data);
    this.router.navigate(['/accueil']);
  }

  handleError(error) {
    console.log('Une erreur est survenue lors de la validation du formulaire - Impossible de créer l\'utilisateur :( ');
  }
} 
