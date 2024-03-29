import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreationArticleComponent } from './creation-article/creation-article.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { EspaceUtilisateurComponent } from './espace-utilisateur/espace-utilisateur.component';
import { CreationDevisComponent } from './creation-devis/creation-devis.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { AddCookieInterceptor } from './services/add-cookie.interceptor';
import { EditEnteteComponent } from './edit-entete/edit-entete.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { AuthInterceptor } from './interceptors/auth-interceptors';
import { ModifyArticleComponent } from './modify-article/modify-article.component';
import { ModifyClientComponent } from './modify-client/modify-client.component';
import { ConfirmDelArticleComponent } from './confirm-del-article/confirm-del-article.component';
import { ConfirmDelClientComponent } from './confirm-del-client/confirm-del-client.component';

@NgModule({
  declarations: [
    AppComponent,
    CreationArticleComponent,
    AcceuilComponent,
    EspaceUtilisateurComponent,
    CreationDevisComponent,
    HeaderComponent,
    InscriptionComponent,
    ConditionsComponent,
    EditEnteteComponent,
    AbonnementComponent,
    AjoutClientComponent,
    ListeClientComponent,
    ModifyArticleComponent,
    ModifyClientComponent,
    ConfirmDelArticleComponent,
    ConfirmDelClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
