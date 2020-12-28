import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from "../models/article";
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-creation-article',
  templateUrl: './creation-article.component.html',
  styleUrls: ['./creation-article.component.css']
})
export class CreationArticleComponent implements OnInit {
  loading = false;
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
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {

    this.idRecu = this.route.snapshot.params.id; // permet de récupérer l'id dans l'url
    console.log('reception creation article: ' + this.idRecu),
      this._idUtilisateur = this.idRecu; // on attribue la valeur de idRecu à _idUtilisateur
  }

  addArticle(){
    this.loading = true;
    const informationProduit = new Article;

    informationProduit._idUtilisateur = this.idRecu;
    informationProduit.typeArticle = this.addArticleForm.value.typeArticle;
    informationProduit.refArticle = this.addArticleForm.value.refArticle;
    informationProduit.libelle = this.addArticleForm.value.libelle;
    informationProduit.prix = this.addArticleForm.value.prix;
    informationProduit.coefficient = this.addArticleForm.value.coeficient;

    this.articleService.createArticle(informationProduit).subscribe(
      data => this.handleSuccess(data,this.addArticle), error => this.handleError(error))
    
  }

  handleSuccess(data, formDirective) {
    this.loading = false;
    this.articleService.dispatchArticleCreated(data._id);
    console.log(data);
    this.router.navigate(['/espace-utilisateur', this.idRecu]);
  }

  handleError(error) {
    this.loading = false;
    console.log('Une erreur est survenue lors de la validation du formulaire - Impossible de créer l\'article :( ');
  }
}
