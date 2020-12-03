import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class ArticleService {
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

    getArticle(): Observable<Article[]> {
        this.idRecu= this.route.snapshot.params.id;
        return this.httpClient.get<Article[]>(`${this.baseUrl}`);
    }

    dispatchArticleCreated(id: string) {
        return this.articleCreated.next(id);
    }

}

