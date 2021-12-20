import { NgModule, ViewChildren } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';

import { IndicacionesComponent } from './components/indicaciones/indicaciones.component';
import { ObrasocialesComponent } from './components/obrasociales/obrasociales.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: CardsComponent,
  },
  {
    path:'indicaciones',
    children:[
      {path:'0',
       component: IndicacionesComponent,

      },
      {
        path:'1',
        component: ObrasocialesComponent,
      }
    ],
  },
  // {
  //   path: 'indicaciones/0',
  //    component: IndicacionesComponent,
  // },
  // {path:'indicaciones/1',
  //   component: ObrasocialesComponent,
  // },

  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
