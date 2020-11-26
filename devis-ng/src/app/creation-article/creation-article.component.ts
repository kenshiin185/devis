import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Article } from "../models/article";
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-creation-article',
  templateUrl: './creation-article.component.html',
  styleUrls: ['./creation-article.component.css']
})
export class CreationArticleComponent implements OnInit {
  idRecu: string = "";
  addArticleForm: FormGroup = new FormGroup(
    {
      _idUtilisateur: new FormControl(""),
      typeArticle: new FormControl("", [Validators.required]),
      refArticle: new FormControl("", [Validators.required]),
      libelle: new FormControl("", [Validators.required]),
      prix: new FormControl("", [Validators.required]),
      coeficient: new FormControl("", [Validators.required]),
    }
    );
    _idUtilisateur: string;

  constructor(
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.idRecu = this.route.snapshot.params.id; // permet de récupérer l'id dans l'url
    console.log('reception creation article: ' + this.idRecu),
      this._idUtilisateur = this.idRecu; // on attribue la valeur de idRecu à _idUtilisateur
  }

  addArticle(){

    const informationProduit = new Article;

    informationProduit._idUtilisateur = this.idRecu;
    informationProduit.typeArticle = this.addArticleForm.value.typeArticle;
    informationProduit.refArticle = this.addArticleForm.value.refArticle;
    informationProduit.libelle = this.addArticleForm.value.libelle;
    informationProduit.prix = this.addArticleForm.value.prix;
    informationProduit.coeficient = this.addArticleForm.value.coeficient;

    this.articleService.createArticle(informationProduit).subscribe()

  }

}
