import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-confirm-del-client',
  templateUrl: './confirm-del-client.component.html',
  styleUrls: ['./confirm-del-client.component.css']
})
export class ConfirmDelClientComponent implements OnInit {
  idRecu: any;
  idClientRecu: string = "";
  client$: Observable<Client>;
  raisonSociale: any;
  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.idRecu = this.route.snapshot.params.id;
    this.idClientRecu = this.route.snapshot.params.idCli;
    console.log('supprimer??', this.idClientRecu);
    console.log('util: ', this.idRecu);
    this.clientService.getSingleClient(this.idClientRecu).subscribe((data) => {
      this.raisonSociale = data.raisonSocialeClient;
    })
  }


  delClient(data: Client) {
    this.clientService.delSingleClient(this.idClientRecu).subscribe(
      (data) => this.handleSuccess(data), error => this.handleError(error))
  }

  handleSuccess(data) {
    
    console.log('redirection vers :liste-client/',this.idRecu);
    this.router.navigate(['/liste-client/',this.idRecu]);

  }
  handleError(error) {
    console.log('erreur :',error);
  }
  cancel() {
    this.router.navigate(['/liste-client/', this.idRecu]);
  }
}
