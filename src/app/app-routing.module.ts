import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { CardsfilteredComponent } from './components/cardsfiltered/cardsfiltered.component';
import { IndicacionesComponent } from './components/indicaciones/indicaciones.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: CardsComponent
  },
  {
    path: 'indicaciones/:codigo',
    component: IndicacionesComponent
   
  },
  {
    path: 'filtered',
    component: CardsfilteredComponent
  },

 
  
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
