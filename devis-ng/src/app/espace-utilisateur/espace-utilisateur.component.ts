import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-espace-utilisateur',
  templateUrl: './espace-utilisateur.component.html',
  styleUrls: ['./espace-utilisateur.component.css']
})
export class EspaceUtilisateurComponent implements OnInit {
articleList$ :Observable<Article[]>;
  constructor(
    private articleService:ArticleService
  ) { }

  ngOnInit() {
    this.articleList$ = this.articleService.getArticle();
  }

}
