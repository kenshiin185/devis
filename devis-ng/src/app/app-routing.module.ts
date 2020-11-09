import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CreationArticleComponent } from './creation-article/creation-article.component';
import { CreationDevisComponent } from './creation-devis/creation-devis.component';
import { EspaceUtilisateurComponent } from './espace-utilisateur/espace-utilisateur.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  {path:'acceuil', component:AcceuilComponent},
  {path:'creation-article', component:CreationArticleComponent},
  {path:'header',component:HeaderComponent},
  {path:'espace-utilisateur', component:EspaceUtilisateurComponent},
  {path:'creation-devis', component:CreationDevisComponent},
  {path:'',redirectTo:'acceuil', pathMatch:'full'},
  {path:'**', redirectTo:'acceuil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
