import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-espace-utilisateur',
  templateUrl: './espace-utilisateur.component.html',
  styleUrls: ['./espace-utilisateur.component.css']
})
export class EspaceUtilisateurComponent implements OnInit {
  token: string = "";
  _id: any = "";
  listeArticleUtilisateur: any;
  idRecu: string = "";
  articleList$: Observable<Article[]>;
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {

    this.idRecu = this.route.snapshot.params.id; // permet de récupérer l'id dans l'url
    this.token = this.route.snapshot.params.token;

    console.log('reception: ' + this.idRecu);
    console.log('reception tok: ' + this.token);
    this.articleList$ = this.articleService.getArticle();// récupération des articles par la méthode du service dans la varriable articleListe$
    this.listeArticles();

  }

  navigWithId() {
    this._id = this.idRecu;
    this.router.navigate(['/creation-article/', this.idRecu]);
  }
  listeArticles() { //liste des articles d'un utilisateur ciblé
    this.articleService.getArticle()
      .subscribe((data) => {
        const filterId = data.filter((element: Article) => element._idUtilisateur == this.idRecu);
        this.listeArticleUtilisateur = filterId;
        console.log('data', data);

      });
  }

}//end class
