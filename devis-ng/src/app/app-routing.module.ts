import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { CreationArticleComponent } from './creation-article/creation-article.component';
import { CreationDevisComponent } from './creation-devis/creation-devis.component';
import { EditEnteteComponent } from './edit-entete/edit-entete.component';
import { EspaceUtilisateurComponent } from './espace-utilisateur/espace-utilisateur.component';
import { HeaderComponent } from './header/header.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListeClientComponent } from './liste-client/liste-client.component';


const routes: Routes = [
  {path:'acceuil', component:AcceuilComponent},
  {path:'header',component:HeaderComponent},
  {path:'espace-utilisateur/:id', component:EspaceUtilisateurComponent},
  {path:'creation-article/:id', component:CreationArticleComponent},
  {path:'creation-devis', component:CreationDevisComponent},
  {path:'edit-entete', component: EditEnteteComponent},
  {path:'abonnement', component:AbonnementComponent},
  {path:'liste-client', component:ListeClientComponent},
  {path:'inscription', component:InscriptionComponent},
  {path:'ajout-client', component:AjoutClientComponent},
  {path:'conditions', component:ConditionsComponent},
  {path:'',redirectTo:'acceuil', pathMatch:'full'},
  {path:'**', redirectTo:'acceuil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
