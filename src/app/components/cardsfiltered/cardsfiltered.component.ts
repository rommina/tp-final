import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-cardsfiltered',
  templateUrl: './cardsfiltered.component.html',
  styleUrls: ['./cardsfiltered.component.scss']
})
export class CardsfilteredComponent implements OnInit {

  services: any[] = [];
  
  
  constructor(private servsvc: ServiciosService) {
    
  }


  ngOnInit(): void {
    setTimeout(()=> {this.services = this.servsvc.filtered}, 2000);
    
  }

}
