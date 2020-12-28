import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../models/client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.css']
})
export class AjoutClientComponent implements OnInit {
  idRecu: string = "";
  _idUtilisateur: string;

  addClientForm: FormGroup = new FormGroup(
    {
      _idUtilisateur: new FormControl(""),
      raisonSocialeClient: new FormControl("", [Validators.required]),
      civiliteClient: new FormControl("", [Validators.required]),
      nomClient: new FormControl("", [Validators.required]),
      prenomClient: new FormControl("", [Validators.required]),
      adresseClient: new FormControl("", [Validators.required]),
      codePostalClient: new FormControl("", [Validators.required]),
      villeClient: new FormControl("", [Validators.required]),
      paysClient: new FormControl("", [Validators.required]),
      mailClient: new FormControl("", [Validators.required]),
      telClient: new FormControl("", [Validators.required]),
      
    }
    );
  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.idRecu = this.route.snapshot.params.id; // permet de récupérer l'id dans l'url
    console.log('reception creation article: ' + this.idRecu),
      this._idUtilisateur = this.idRecu; // on attribue la valeur de idRecu à _idUtilisateur
  }
addClient() {
  const client = new Client;

  client._idUtilisateur = this.idRecu;
  client.raisonSocialeClient = this.addClientForm.value.raisonSocialeClient;
  client.civiliteClient = this.addClientForm.value.civiliteClient;
  client.nomClient = this.addClientForm.value.nomClient;
  client.prenomClient = this.addClientForm.value.prenomClient;
  client.adresseClient = this.addClientForm.value.adresseClient;
  client.codePostalClient = this.addClientForm.value.codePostalClient;
  client.villeClient = this.addClientForm.value.villeClient;
  client.paysClient = this.addClientForm.value.paysClient;
  client.mailClient = this.addClientForm.value.mailClient;
  client.telClient = this.addClientForm.value.telClient;
  client.dateCreationClient =new Date(Date.now())

  this.clientService.createClient(client).subscribe(
    data => this.handleSuccess(data,this.addClient), error => this.handleError(error))
  
}

handleSuccess(data, formDirective) {
  this.clientService.dispatchClientCreated(data._id);
  console.log(data);
  this.router.navigate(['/espace-utilisateur', this.idRecu]);
}

handleError(error) {
  console.log('Une erreur est survenue lors de la validation du formulaire - Impossible d\'ajouter le client :( ');
}
}
