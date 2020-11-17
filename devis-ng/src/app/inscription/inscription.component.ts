import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective} from '@angular/forms';
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
    private utilisateurService: UtilisateurService
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
      rgpd:'',
      dateInscriptionUtilisateur:new Date(Date.now()),
      actif:false
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
  }

  handleError(error) {
    console.log('Une erreur est survenue lors de la validation du formulaire - Impossible de créer l\'utilisateur :( ');
  }
} 
