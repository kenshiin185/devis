import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utilisateur } from '../models/utilisateur'
import { UtilisateurAuth } from '../models/utilisateurAuth';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  id: string;
  private _id: string;
  user: Utilisateur;
  isLogged = false;
  baseUrl = 'http://localhost:3000/auth/register';
  baseUrlAuth = 'http://localhost:3000/auth/login';
  baseUrlLogOut = 'http://localhost:3000/auth/logout';
  baseUrlSingleUtilisateur = 'http://localhost:3000/api/v1/utilisateur';
  baseUrlUtilisateurs = 'http://localhost:3000/auth/utilisateur'
  private utilisateurCreated = new Subject<string>();
  constructor(
    private httpClient: HttpClient
  ) { }

  createUtilisateur(post: Utilisateur) { // création d'un utilisateur
    return this.httpClient.post<Utilisateur>(this.baseUrl, post);
  }
  authUtilisateur(utilisateur: UtilisateurAuth) {
    this.isLogged=true;
    return this.httpClient.post<UtilisateurAuth>(`${this.baseUrlAuth}`,JSON.stringify(utilisateur), {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    });
  }
  logOut() {
    this.isLogged=false;
    return this.httpClient.get(`${this.baseUrlLogOut}`);
  }
  getUtilisateur(): Observable<Utilisateur[]> {
    return this.httpClient.get<Utilisateur[]>(`${this.baseUrlUtilisateurs}`);
  }
  getSingleUtilisateur():Observable<Utilisateur> {
    return this.httpClient.get<Utilisateur>(`${this.baseUrlSingleUtilisateur}`);
  }

  getIdUtilisateur(id:string): Observable<Utilisateur> { //this
    return this.httpClient.get<Utilisateur>(`${this.baseUrlUtilisateurs}/${id}?filter[fields][_id]=true`)
  }

  dispatchUtilisateurCreated(id: string) {
    return this.utilisateurCreated.next(id);
  }

}
