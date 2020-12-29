import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  idClient:string=""
  baseUrl = 'http://localhost:3000/api/client';
  idRecu: string = "";
  private clientCreated = new Subject<string>();
  constructor(
    private httpClient: HttpClient,
        private route:ActivatedRoute
  ) { }
  
  createClient(post: Client) {
    this.idRecu= this.route.snapshot.params.id;
    return this.httpClient.post<Client>(this.baseUrl, post);
}

public updateClient(_id:string, informationClient:any): Observable<void> {
  return this.httpClient.put<void>(`${this.baseUrl}/${_id}`, JSON.stringify(informationClient), {
      headers:new HttpHeaders().set("Content-Type", "application/json")
  });
}
getClient(): Observable<Client[]> {
  this.idRecu= this.route.snapshot.params.id;
  return this.httpClient.get<Client[]>(`${this.baseUrl}`);
}

getSingleClient(_id:string): Observable<Client> {
  return this.httpClient.get<Client>(`${this.baseUrl}/${_id}`);
}

delSingleClient(_id:string): Observable<Client> {
  return this.httpClient.delete<Client>(`${this.baseUrl}/${_id}`);
}
dispatchClientCreated(id: string) {
  return this.clientCreated.next(id);
}
}
