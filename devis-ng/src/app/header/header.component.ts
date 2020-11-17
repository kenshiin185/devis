import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router:Router,
    private utilisateurService:UtilisateurService
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.utilisateurService.logOut().subscribe(data => {
      console.log(data);
      this.router.navigate(['/accueil']);
    }, err => console.error(err));
  }
}
