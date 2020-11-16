import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreationArticleComponent } from './creation-article/creation-article.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { EspaceUtilisateurComponent } from './espace-utilisateur/espace-utilisateur.component';
import { CreationDevisComponent } from './creation-devis/creation-devis.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConditionsComponent } from './conditions/conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    CreationArticleComponent,
    AcceuilComponent,
    EspaceUtilisateurComponent,
    CreationDevisComponent,
    HeaderComponent,
    InscriptionComponent,
    ConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
