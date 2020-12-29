import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from "../models/article";
import { ArticleService } from '../services/article.service';
@Component({
  selector: 'app-modify-article',
  templateUrl: './modify-article.component.html',
  styleUrls: ['./modify-article.component.css']
})
export class ModifyArticleComponent implements OnInit {
  data: Article;
  article$;
  loading = false;
  idRecu: string = "";
  idArticleRecu:any;
  modifyArticleForm: FormGroup = new FormGroup(
    {
      _idUtilisateur: new FormControl(""),
      typeArticle: new FormControl("", [Validators.required]),
      refArticle: new FormControl("", [Validators.required]),
      libelle: new FormControl("", [Validators.required]),
      prix: new FormControl("", [Validators.required]),
      coefficient: new FormControl("", [Validators.required]),
    }
  );
  _id: string;

  constructor(
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.idArticleRecu = this.route.snapshot.params.idArt;
    this.idRecu = this.route.snapshot.params.id; // permet de récupérer l'id dans l'url
    console.log('id de l\'utilisateur : ' + this.idRecu),
    console.log('id de l\'article sélectionné : ' + this.idArticleRecu),
      // this.idArticleRecu = this.idRecu; // on attribue la valeur de idRecu à _id
    this.articleService.getSingleArticle(this.idArticleRecu);
    this.singleArticle();
  }
  singleArticle() {
    this.articleService.getSingleArticle(this.idArticleRecu)
      .subscribe((data) => {
        this.data = data;
        console.log('singleArticle: ', data);
      },
        error => console.log(error));
  }

  modifyArticle(formDirective: FormGroupDirective) {
    this.loading = true;
   
    const informationProduit = this.data;
    informationProduit._id = this.idArticleRecu;
    informationProduit._idUtilisateur = this.idRecu;
    informationProduit.refArticle = this.modifyArticleForm.value.refArticle;
    informationProduit.typeArticle = this.modifyArticleForm.value.typeArticle;
    informationProduit.libelle = this.modifyArticleForm.value.libelle;
    informationProduit.prix = this.modifyArticleForm.value.prix;
    informationProduit.coefficient = this.modifyArticleForm.value.coefficient;

    this.articleService.updateArticle(informationProduit._id, informationProduit).subscribe(
      data => this.handleSuccess(data, formDirective), error => this.handleError(error));
  }

  handleSuccess(data, formDirective) {
    this.loading = false;
    console.log('Mise à jour de l\'article réussie', data);
   
    this.articleService.dispatchArticleCreated(data._id);
    this.router.navigate(['/espace-utilisateur', this.idRecu]);
  }

  handleError(error) {
    this.loading = false;
    console.log('Une erreur est survenue lors de la validation du formulaire - Impossible de modifier l\'article :( ');
  }
}
