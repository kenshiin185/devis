import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
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
  // createEntete(post: Entete) {
  //   this.idRecu = this.route.snapshot.params.id;
  //   return this.httpClient.post<Entete>(this.baseUrl, post);
  // }
createEntete(entete: Entete, image: File) {
  return new Promise((resolve, reject) => {
    const enteteData = new FormData();
    enteteData.append('entete', JSON.stringify(entete));
    enteteData.append('image', image);
    this.httpClient.post(`${this.baseUrl}`, enteteData).subscribe(
      (response)=> {
        resolve(response);
      },
      (error) => {
        reject(error);
      }
    );
  });
}
  dispatchEnteteCreated(id:string) {
    return this.enteteCreated.next(id);
  }
}
