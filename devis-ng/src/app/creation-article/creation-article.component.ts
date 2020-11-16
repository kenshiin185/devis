import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-creation-article',
  templateUrl: './creation-article.component.html',
  styleUrls: ['./creation-article.component.css']
})
export class CreationArticleComponent implements OnInit {
  addArticleForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.addForm();
  }

  addForm() {
    this.addArticleForm = this.formBuilder.group({
      _idUtilisateur: '5fa90cbaeb14e31684fdc104',
      typeArticle: '',
      refArticle: '',
      libelle: '',
      prix: '',
      coeficient: ''
    });
  }

  addArticle(formDirective: FormGroupDirective) {
    if (this.addArticleForm.valid) {
      this.articleService.createArticle(this.addArticleForm.value)
        .subscribe(data => this.handleSuccess(data, formDirective), error => this.handleError(error));
    }
  }

  handleSuccess(data, formDirective) {
    this.articleService.dispatchArticleCreated(data._id);
  }

  handleError(error) {
    console.log('Une erreur est survenue - impossible de créer article', error);
  }
}
