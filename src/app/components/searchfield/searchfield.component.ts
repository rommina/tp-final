import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';


@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.scss']
})
export class SearchfieldComponent implements OnInit {
  search: string = '';
  clear: boolean= false;
  constructor( private serscv: ServiciosService) {} 

  ngOnInit(): void {
  }
  
  filter($event:any) {
    $event.preventDefault();
    this.serscv.filterServicios(this.search.trim());
    this.search= '';
    this.clear= true;
   }
   onclear() {
     this.serscv.resetServicios();
     this.clear = false;
   }
}


