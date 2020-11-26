import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ArticleService {
baseUrl = 'http://localhost:3000/api/v1/article';
private articleCreated = new Subject<string>();

    constructor(
        private httpClient: HttpClient) { }

    createArticle(post: Article) {
        return this.httpClient.post<Article>(this.baseUrl, post);
    }

    getArticle():Observable<Article[]> {
        return this.httpClient.get<Article[]>(`${this.baseUrl}`);
    }

    dispatchArticleCreated(id:string) {
        return this.articleCreated.next(id);
    }

}

