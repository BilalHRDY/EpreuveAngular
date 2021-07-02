import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJoueurComponent } from './add-joueur/add-joueur.component';
import { DetailJoueurComponent } from './detail-joueur/detail-joueur.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes : Routes = [


  {path:'', component: HomePageComponent},
  {path:'joueur/add', component: AddJoueurComponent},
  {path:'joueur/:id', component: DetailJoueurComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
