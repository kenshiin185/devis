import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurCourantService } from '../services/utilisateur-courant.service';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
utilisateur$ : Observable<Utilisateur[]>;
user: Utilisateur;
idRecu: string = "";
  constructor(
    public utilisateurCourant:UtilisateurCourantService,
    private router:Router,
    private utilisateurService:UtilisateurService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idRecu = this.route.snapshot.params.id;
    
    this.utilisateurService.getIdUtilisateur(this.utilisateurCourant.id).subscribe((data) => {
      this.user = data;
      console.log('test',data);
      console.log('id recu: ' + this.idRecu);
    });
   
  }

  logOut() {
    this.utilisateurService.logOut().subscribe(data => {
      console.log(data);
      this.router.navigate(['/accueil']);
    }, err => console.error(err));
  }
}
