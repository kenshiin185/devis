import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utilisateur } from '../models/utilisateur'
import { UtilisateurAuth } from '../models/utilisateurAuth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  isAuth$ = new BehaviorSubject<boolean>(false);
  userId: string;
  id: string;
  token: string;
  private _id: string;
  user: Utilisateur;
  isLogged = false;
  baseUrl = 'http://localhost:3000/api/auth/signup';
  baseUrlAuth = 'http://localhost:3000/api/auth/login';
  baseUrlLogOut = 'http://localhost:3000/api/auth/logout';
  baseUrlSingleUtilisateur = 'http://localhost:3000/api/auth/utilisateur';
  baseUrlUtilisateurs = 'http://localhost:3000/api/auth/utilisateur'
  private utilisateurCreated = new Subject<string>();
  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { }

  createUtilisateur(post: Utilisateur) { // création d'un utilisateur
    return this.httpClient.post<Utilisateur>(this.baseUrl, post);
  }
  authUtilisateur(utilisateur: UtilisateurAuth) {
    this.isLogged = true;
    return this.httpClient.post<UtilisateurAuth>(`${this.baseUrlAuth}`, JSON.stringify(utilisateur), {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    });
  }
  /****************************************************************** */
  login(mailUtilisateur: string, passwordUtilisateur: string) {
    return new Promise((resolve, reject) => {
      this.httpClient.post(
        this.baseUrlAuth,
        { mailUtilisateur: mailUtilisateur, passwordUtilisateur: passwordUtilisateur })
        .subscribe(
          (authData: { token: string, userId: string }) => {
            this.token = authData.token;
            this.userId = authData.userId;
            this.isAuth$.next(true);
            console.log(this.token);
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
  /**************************************************************** */


  logOut() {
    this.isAuth$.next(false);
    this.userId = null;
    this.token = null;
    return this.httpClient.get(`${this.baseUrlLogOut}`);
  }
  getUtilisateur(): Observable<Utilisateur[]> {
    return this.httpClient.get<Utilisateur[]>(`${this.baseUrlUtilisateurs}`);
  }
  getSingleUtilisateur(): Observable<Utilisateur> {
    return this.httpClient.get<Utilisateur>(`${this.baseUrlSingleUtilisateur}`);
  }

  getIdUtilisateur(id: string): Observable<Utilisateur> { //this
    return this.httpClient.get<Utilisateur>(`${this.baseUrlUtilisateurs}/${id}`);
  }

  dispatchUtilisateurCreated(id: string) {
    return this.utilisateurCreated.next(id);
  }

}
