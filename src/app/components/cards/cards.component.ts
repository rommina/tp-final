import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
 
  services: any[] = []
  
  
  constructor(private servsvc: ServiciosService) {
    this.services = this.servsvc.services;
  }

  ngOnInit(): void {}



  navigate() {
    console.log('click');
  }
}
