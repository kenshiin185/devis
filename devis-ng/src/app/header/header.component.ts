import { tokenName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurCourantService } from '../services/utilisateur-courant.service';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuth$ = new BehaviorSubject<boolean>(false);
  utilisateur$: Observable<Utilisateur[]>;
  user: Utilisateur;
  userId: string;
  idRecu: string = "";
  token: string = "";
  public isAuth: Boolean;
  private isAuthSub: Subscription
  constructor(
    public utilisateurCourant: UtilisateurCourantService,
    private router: Router,
    private utilisateurService: UtilisateurService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idRecu = this.route.snapshot.params.id;
    this.token = this.route.snapshot.params.token;
    this.isAuthSub = this.utilisateurService.isAuth$.subscribe(
      (utilisateurService) => {
        this.isAuth = utilisateurService;
      }
    );
    this.utilisateurService.getIdUtilisateur(this.utilisateurCourant.id).subscribe((data) => {
      this.user = data;
      console.log('test', data);
      console.log('id recu: ' + this.idRecu);
    });
    console.log('rere: ' + this.isAuth);
    console.log('tok', this.token);
  }

  onLogout() {
    this.utilisateurService.logOut()
    this.router.navigate(['/accueil']);

  }
}
