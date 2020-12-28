import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent implements OnInit {
  token: string = "";
  idRecu:string;
  listeClientUtilisateur: any;
  clientList$: Observable<Client[]>;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private clientService:ClientService) { }

  ngOnInit() {
    this.idRecu = this.route.snapshot.params.id; // permet de récupérer l'id dans l'url
    this.token = this.route.snapshot.params.token;
    this.clientList$ = this.clientService.getClient();
    this.listeClients();
  }

  listeClients() {
    this.clientService.getClient()
    .subscribe((data) => {
      const filterId = data.filter((element: Client) => element._idUtilisateur == this.idRecu);
      this.listeClientUtilisateur = filterId;
    });
  }

  deleteClient() {
    //TODO
  }

}
