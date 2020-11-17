import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from '../models/utilisateur'
import { UtilisateurAuth } from '../models/utilisateurAuth';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  isLogged = false;
  baseUrl = 'http://localhost:3000/auth/register';
  baseUrlAuth = 'http://localhost:3000/auth/login';
  baseUrlLogOut = 'http://localhost:3000/auth/logout';
  private utilisateurCreated = new Subject<string>();
  constructor(
    private httpClient: HttpClient
  ) { }

  createUtilisateur(post: Utilisateur) { // création d'un utilisateur
    return this.httpClient.post<Utilisateur>(this.baseUrl, post);
  }
  authUtilisateur(utilisateur: UtilisateurAuth) {
    this.isLogged=true;
    return this.httpClient.post<UtilisateurAuth>(`${this.baseUrlAuth}`,utilisateur);
  }
  logOut() {
    this.isLogged=false;
    return this.httpClient.get(`${this.baseUrlLogOut}`);
  }
  getUtilisateur(): Observable<Utilisateur[]> {
    return this.httpClient.get<Utilisateur[]>(`${this.baseUrl}/`);
  }

  dispatchUtilisateurCreated(id: string) {
    return this.utilisateurCreated.next(id);
  }

}
