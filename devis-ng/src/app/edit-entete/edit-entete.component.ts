import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { EnteteService } from '../services/entete.service';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { Entete } from '../models/entete';
import { HttpClient } from '@angular/common/http';
import { UtilisateurAuth } from '../models/utilisateurAuth';

@Component({
  selector: 'app-edit-entete',
  templateUrl: './edit-entete.component.html',
  styleUrls: ['./edit-entete.component.css']
})
export class EditEnteteComponent implements OnInit {
  public imagePreview: string;
  public editEnteteForm:FormGroup;
  idRecu: string = "";
  _idUtilisateur: string;
  baseUrl:string = 'http://localhost:3000';
  
  constructor(
    private formBuilder: FormBuilder,
    private enteteService: EnteteService,
    private route: ActivatedRoute,
    private router:Router,
    private http:HttpClient,
    
  ) { }
  
  ngOnInit() {
    this.idRecu = this.route.snapshot.params.id; 
    console.log('wat: ',this.idRecu);
    this.editEnteteForm = this.formBuilder.group({
      _idUtilisateur: [null],
      raisonSociale:  [null,Validators.required],
      adresse: [null,Validators.required],
      codePostal: [null,Validators.required],
      ville:[null,Validators.required],
      coeficient:  [null,Validators.required],
      mail: [null,Validators.required],
      tel:  [null, Validators.required],
      capitalSocial:[null, Validators.required],
      siret:  [null, Validators.required],
      siren:  [null, Validators.required],
      tvaIntraCommunautaire: [null, Validators.required],
      logo:  [null, Validators.required]
    });
    this._idUtilisateur = this.idRecu;
  }

  onSubmit() {
    const enteteUtilisateur = new Entete();
    enteteUtilisateur._idUtilisateur = this.idRecu;
    enteteUtilisateur.raisonSociale = this.editEnteteForm.get('raisonSociale').value;
    enteteUtilisateur.adresse = this.editEnteteForm.get('adresse').value;
    enteteUtilisateur.codePostal = this.editEnteteForm.get('codePostal').value;
    enteteUtilisateur.ville = this.editEnteteForm.get('ville').value;
    enteteUtilisateur.mail = this.editEnteteForm.get('mail').value;
    enteteUtilisateur.tel = this.editEnteteForm.get('tel').value;
    enteteUtilisateur.capitalSocial = this.editEnteteForm.get('capitalSocial').value;
    enteteUtilisateur.siret = this.editEnteteForm.get('siret').value;
    enteteUtilisateur.siren = this.editEnteteForm.get('siren').value;
    enteteUtilisateur.tvaIntraCommunautaire = this.editEnteteForm.get('tvaIntraCommunautaire').value;
    enteteUtilisateur.logo = '';

    this.enteteService.createEntete(enteteUtilisateur, this.editEnteteForm.get('image').value).then(
      () => {
        this.editEnteteForm.reset();
        this.router.navigate(['/espace-utilisateur', this.idRecu]);
      },
      (error) => {
        console.log('error');
      }
    )
    // const enteteUtilisateur = new Entete;
    // enteteUtilisateur._idUtilisateur = this.idRecu;
    // enteteUtilisateur.raisonSociale = this.editEnteteForm.value.raisonSociale;
    // enteteUtilisateur.adresse =this.editEnteteForm.value.adresse;
    // enteteUtilisateur.codePostal =this.editEnteteForm.value.codePostal;
    // enteteUtilisateur.ville =this.editEnteteForm.value.ville;
    // enteteUtilisateur.mail =this.editEnteteForm.value.mail;
    // enteteUtilisateur.tel =this.editEnteteForm.value.tel;
    // enteteUtilisateur.capitalSocial =this.editEnteteForm.value.capitalSocial;
    // enteteUtilisateur.siret =this.editEnteteForm.value.siret;
    // enteteUtilisateur.siren =this.editEnteteForm.value.siren;
    // enteteUtilisateur.tvaIntraCommunautaire =this.editEnteteForm.value.tvaIntraCommunautaire;
    // enteteUtilisateur.logo =this.editEnteteForm.value.logo;

    // this.enteteService.createEntete(enteteUtilisateur).subscribe(
    //   data => this.handleSuccess(data,this.editEntete), error => this.handleError(error))
  }

  // handleSuccess(data, formDirective) {
  //   this.enteteService.dispatchEnteteCreated(data._id);
  //   console.log(data);
  //   this.router.navigate(['/espace-utilisateur', this.idRecu]);
  // }

  // handleError(error) {

  // }

  onImagePick(event: Event) {

   const file = (event.target as HTMLInputElement).files[0];
   this.editEnteteForm.get('image').patchValue(file);
   this.editEnteteForm.get('image').updateValueAndValidity();
   const reader = new FileReader();
   reader.onload = () => {
     if (this.editEnteteForm.get('image').valid) {
       this.imagePreview = reader.result as string;

     }else {
       this.imagePreview = null;
     }
   };
   reader.readAsDataURL(file);
  }
}
