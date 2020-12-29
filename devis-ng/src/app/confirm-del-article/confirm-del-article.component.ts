import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-confirm-del-article',
  templateUrl: './confirm-del-article.component.html',
  styleUrls: ['./confirm-del-article.component.css']
})
export class ConfirmDelArticleComponent implements OnInit {
  idArticleRecu: string = "";
  idRecu: any;
  article$: Observable<Article>;
  libelleArticle: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.idRecu = this.route.snapshot.params.id;
    this.idArticleRecu = this.route.snapshot.params.idArt;
    console.log('supprimer??', this.idArticleRecu);
    console.log('util: ', this.idRecu);
    this.articleService.getSingleArticle(this.idArticleRecu).subscribe((data) => {
      this.libelleArticle = data.libelle;
    });

  }
  delArticle(data: Article) {
    this.articleService.delSingleArticle(this.idArticleRecu).subscribe(
      data => this.handleSuccess(data), error => this.handleError(error))

  }
  handleSuccess(data) {
    // this.idRecu = data._idUtilisateur;
    console.log('redirection vers :espace-utilisateur/',this.idRecu);
    this.router.navigate(['/espace-utilisateur/',this.idRecu]);

  }
  handleError(error) {
    console.log('erreur :',error);
  }

  cancel() {
    this.router.navigate(['/espace-utilisateur/',this.idRecu]);
  }
}
