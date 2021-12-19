import { Component, OnInit } from '@angular/core';
import { ServiciosService, service } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
 
  services: service[] = [];
  
  constructor(private servsvc: ServiciosService) {
   // this.services = this.servsvc.services;
   this.servsvc.getServices().subscribe((services) =>{
     console.log(services);
      this.services= services;

    });  
  }

  ngOnInit(): void {}



  navigate() {
    console.log('click');
  }
}
