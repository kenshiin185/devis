import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from '../models/utilisateur'

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  baseUrl = 'http://localhost:3000/api/v1/utilisateur';
  private utilisateurCreated = new Subject<string>();
  constructor(
    private httpClient: HttpClient
  ) { }

  createUtilisateur(post: Utilisateur) { // création d'un utilisateur
    return this.httpClient.post<Utilisateur>(this.baseUrl, post);
}

getUtilisateur():Observable<Utilisateur[]> {
  return this.httpClient.get<Utilisateur[]>(`${this.baseUrl}/`);
}

dispatchUtilisateurCreated(id:string) {
  return this.utilisateurCreated.next(id);
}

}
