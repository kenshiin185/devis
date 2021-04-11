import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Entete } from '../models/entete';

@Injectable({
  providedIn: 'root'
})
export class EnteteService {
  idRecu: string = "";
  baseUrl = 'http://localhost:3000/api/entete';
  private enteteCreated = new Subject<string>();
  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute
  ) { }
  createEntete(post: Entete) {
    this.idRecu = this.route.snapshot.params.id;
    return this.httpClient.post<Entete>(this.baseUrl, post);
  }



getEntete(): Observable<Entete[]> {
  this.idRecu= this.route.snapshot.params.id;
  return this.httpClient.get<Entete[]>(`${this.baseUrl}`);
}
getSingleEntete(id:string): Observable<Entete> {
  this.idRecu= this.route.snapshot.params.id;
  console.log(`rrr: ${this.baseUrl}/${this.idRecu}` )
  return this.httpClient.get<Entete>(`${this.baseUrl}/${id}`);
}
  dispatchEnteteCreated(id:string) {
    return this.enteteCreated.next(id);
  }
}
