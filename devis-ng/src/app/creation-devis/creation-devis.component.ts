import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { Client } from '../models/client';
import { Entete } from '../models/entete';
import { ArticleService } from '../services/article.service';
import { ClientService } from '../services/client.service';
import { EnteteService } from '../services/entete.service';
import * as jsPDF from 'jspdf';
import * as  html2pdf from 'html2pdf.js'

@Component({
  selector: 'app-creation-devis',
  templateUrl: './creation-devis.component.html',
  styleUrls: ['./creation-devis.component.css']
})
export class CreationDevisComponent implements OnInit {
  /***************message******** */
  titreDevis = 'Devis';
  titreFacture = 'Facture';
  /**************************** */
  somme: number = 0;
  sommeTva:number = 0;
  zero: boolean=false;
  onze: boolean=false;
  vingtDeux: boolean=false;
  displayTypeDoc:boolean = true;
  displaySelectTva:boolean = false;
  displaySelectArticles:boolean = false;
  tvaAppliquer:any;
  totalttc:number = 0;
  quantite:number = 1;
  newArticleArray = [];
  _id: any;
  idUtRecu: any;
  listeEnteteUtilisateur: any;
  listeEnteteClient: any;
  listeArticlesUtilisateur: any;
  articleList$: Observable<Entete[]>;
  article$: Observable<Entete>;
  idEnt: Entete[];
  idCli: any;
  devis = true;
  facture = false;
  constructor(
    private enteteService: EnteteService,
    private router: ActivatedRoute,
    private clientService: ClientService,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.idUtRecu = this.router.snapshot.params.id;
    this.idCli = this.router.snapshot.params.idArt;
    console.log('idrecu', this.idUtRecu);
    console.log('idCli: ', this.idCli);
    this.articleList$ = this.enteteService.getEntete();
    this.listeEntetes();
    this.enteteClient();
    this.articlesUtilisateur();

  }

  /***********switch********** */
  deviss() {
    this.devis = true;
    this.facture = false;
    this.displayTypeDoc = false;
    this.displaySelectTva = true;
  }
  factures() {
    this.devis = false;
    this.facture = true;
    this.displayTypeDoc = false;
    this.displaySelectTva = true;
  }
  /************************* */
tva0() {
  this.zero = true;
  this.onze = false;
  this.vingtDeux = false;
  this.tvaAppliquer=0;
  this.displaySelectTva = false;
  this.displaySelectArticles = true;
}
tva11() {
  this.zero = false;
  this.onze = true;
  this.vingtDeux = false;
  this.tvaAppliquer = 11;
  this.displaySelectTva = false;
  this.displaySelectArticles = true;
}
tva22() {
  this.zero = true;
  this.onze = false;
  this.vingtDeux = true;
  this.tvaAppliquer = 22;
  this.displaySelectTva = false;
  this.displaySelectArticles = true;
}

  download() {
    var element = document.getElementById('doc');
    html2pdf(element);
  }

  listeEntetes() {
    this.enteteService.getEntete()
      .subscribe((data) => {
        const filterId = data.filter((element: Entete) => element._idUtilisateur == this.idUtRecu);
        this.listeEnteteUtilisateur = filterId;
        console.log(this.listeEnteteUtilisateur);
      });
  }

  enteteClient() {
    this.clientService.getClient()
      .subscribe((data) => {
        const filterIdCli = data.filter((element: Client) => element._id == this.idCli);
        this.listeEnteteClient = filterIdCli;
        console.log('entete du client :', this.listeEnteteClient);
      })
  }

  articlesUtilisateur() {
    this.articleService.getArticle()
      .subscribe((data) => {
        const filterIdUtilisateur = data.filter((element: Article) => element._idUtilisateur == this.idUtRecu);
        this.listeArticlesUtilisateur = filterIdUtilisateur;
        console.log('liste de mes articles :', this.listeArticlesUtilisateur);
      });
  }
  calcSommeTva() {
    this.sommeTva = this.somme / 100 * this.tvaAppliquer;
  }
  calcTotalTtc() {
    this.totalttc = this.somme + this.sommeTva;
  }


  addArticle(i) {
    
    const articleArray: Article = this.listeArticlesUtilisateur;
    console.log('article ajouté à la liste: ', articleArray[i]);
    this.newArticleArray.push(articleArray[i]);
    console.log(this.newArticleArray);
    console.log('somme ajoutée: ', articleArray[i].prix);
    this.somme += articleArray[i].prix;
    this.calcSommeTva();
    this.calcTotalTtc();
    
  }

}
