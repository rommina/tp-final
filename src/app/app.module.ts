import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';

import { SearchfieldComponent } from './components/searchfield/searchfield.component';
import { CardsComponent } from './components/cards/cards.component';
import { IndicacionesComponent } from './components/indicaciones/indicaciones.component';
import { ObrasocialesComponent } from './components/obrasociales/obrasociales.component';
import { FormsModule } from '@angular/forms';
import { CardsfilteredComponent } from './components/cardsfiltered/cardsfiltered.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,

    SearchfieldComponent,
    CardsComponent,
    IndicacionesComponent,
    ObrasocialesComponent,
    CardsfilteredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
