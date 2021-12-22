import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.scss']
})
export class SearchfieldComponent implements OnInit {
  search: string = '';
  clear: boolean= false;
  rutaActual: string =this.router.url;

  constructor( private serscv: ServiciosService, private actRoute: ActivatedRoute, private router: Router, private location: Location) {} 

  ngOnInit(): void { 
    this.actRoute.params.subscribe((pararms) => {
    if (pararms['search'])
      this.search = pararms['search'];
  })
  }
 
  
  filter($event:any) {
    $event.preventDefault();
    this.serscv.filterServicios(this.search.trim());
    this.clear= true;
   }
   onClear() {
     this.serscv.resetServicios();
     this.clear = false;
   }
}


