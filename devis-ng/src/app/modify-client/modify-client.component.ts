import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../models/client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-modify-client',
  templateUrl: './modify-client.component.html',
  styleUrls: ['./modify-client.component.css']
})
export class ModifyClientComponent implements OnInit {
  data: Client;
  article$;
  loading = false;
  idRecu: string = "";
  idClientRecu:any;
  updateClientForm: FormGroup = new FormGroup(
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
      mailClient: new FormControl("", [Validators.required,Validators.email]),
      telClient: new FormControl("", [Validators.required]),
    }
  );
  _id: string;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.idClientRecu = this.route.snapshot.params.idArt;
    this.idRecu = this.route.snapshot.params.id; 
    console.log('id de l\'utilisateur : ' + this.idRecu),
    console.log('id du client sélectionné : ' + this.idClientRecu),
    
    this.clientService.getSingleClient(this.idClientRecu);
    this.singleClient();
  }
  singleClient() {
    this.clientService.getSingleClient(this.idClientRecu)
      .subscribe((data) => {
        this.data = data;
        console.log('singleClient: ', data);
      },
        error => console.log(error));
  }

  updateClient(formDirective: FormGroupDirective) {
    this.loading = true;
   
    const informationClient = this.data;
    informationClient._id = this.idClientRecu;
    informationClient._idUtilisateur = this.idRecu;
    informationClient.raisonSocialeClient = this.updateClientForm.value.raisonSocialeClient;
    informationClient.civiliteClient = this.updateClientForm.value.civiliteClient;
    informationClient.nomClient = this.updateClientForm.value.nomClient;
    informationClient.prenomClient = this.updateClientForm.value.prenomClient;
    informationClient.adresseClient = this.updateClientForm.value.adresseClient;
    informationClient.codePostalClient = this.updateClientForm.value.codePostalClient;
    informationClient.villeClient = this.updateClientForm.value.villeClient;
    informationClient.paysClient = this.updateClientForm.value.paysClient;
    informationClient.mailClient = this.updateClientForm.value.mailClient;
    informationClient.telClient = this.updateClientForm.value.telClient;

    this.clientService.updateClient(informationClient._id, informationClient).subscribe(
      data => this.handleSuccess(data, formDirective), error => this.handleError(error));
  }

  handleSuccess(data, formDirective) {
    this.loading = false;
    console.log('Mise à jour du client réussie', data);
   
    this.clientService.dispatchClientCreated(data._id);
    this.router.navigate(['/liste-client', this.idRecu]);
  }

  handleError(error) {
    this.loading = false;
    console.log('Une erreur est survenue lors de la validation du formulaire - Impossible de modifier le client :( ');
  }
  cancel() {
    this.router.navigate(['/liste-client', this.idRecu]);
  }
}
