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
import { HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { AltaComponent } from './components/alta/alta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,

    SearchfieldComponent,
    CardsComponent,
    IndicacionesComponent,
    ObrasocialesComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    AltaComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
