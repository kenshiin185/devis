import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../models/article';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Injectable({
    providedIn: 'root'
})

export class ArticleService {
    idArticle:string= "";
    idRecu: string = "";
    baseUrl = 'http://localhost:3000/api/article';
    private articleCreated = new Subject<string>();

    constructor(
        private httpClient: HttpClient,
        private route:ActivatedRoute) { }

    createArticle(post: Article) {
        this.idRecu= this.route.snapshot.params.id;
        return this.httpClient.post<Article>(this.baseUrl, post);
    }

   public updateArticle(_id:string, informationProduit:any): Observable<void> {
        return this.httpClient.put<void>(`${this.baseUrl}/${_id}`, JSON.stringify(informationProduit), {
            headers:new HttpHeaders().set("Content-Type", "application/json")
        });
    }

    getArticle(): Observable<Article[]> {
        this.idRecu= this.route.snapshot.params.id;
        return this.httpClient.get<Article[]>(`${this.baseUrl}`);
    }
    getSingleArticle(_id:string): Observable<Article> {
        // this.idArticle= this.route.snapshot.params._id;
        return this.httpClient.get<Article>(`${this.baseUrl}/${_id}`);
    }
    delSingleArticle(_id:string): Observable<Article> {
        return this.httpClient.delete<Article>(`${this.baseUrl}/${_id}`);
    }
    dispatchArticleCreated(id: string) {
        return this.articleCreated.next(id);
    }

}

