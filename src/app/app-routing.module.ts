import { NgModule, ViewChildren } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaComponent } from './components/alta/alta.component';
import { CardsComponent } from './components/cards/cards.component';

import { IndicacionesComponent } from './components/indicaciones/indicaciones.component';
import { LoginComponent } from './components/login/login.component';
import { ObrasocialesComponent } from './components/obrasociales/obrasociales.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path:'home',
    component: CardsComponent,
    
  },
  {
    path:'alta',
    component: AltaComponent,
    
  },
  {
    path:'login',
    component: LoginComponent,
    
  },
  {
    path:'indicaciones',
    canActivate:[AuthGuard],
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
