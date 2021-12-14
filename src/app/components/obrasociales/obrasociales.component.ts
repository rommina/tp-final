 import { Component, OnInit } from '@angular/core';

 @Component({
   selector: 'app-obrasociales',
  templateUrl: './obrasociales.component.html',
   styleUrls: ['./obrasociales.component.scss']
 })
 export class ObrasocialesComponent implements OnInit {
  osociales: any[] = [

    {codigo:"500",
    nombre:"ENERGIA SALUD",
     arancel:"80",
     digitales:"si"},

 {codigo:"57000",
   nombre:"ENSALUD SA –",
     arancel:"78",
     digitales:"si"},

     {codigo:"5800",
     nombre:"IAPO–",
     arancel:"60",
     digitales:"si"},

     {codigo:"401",
     nombre:"IOSFA (DIBPFA)",
     arancel:"38,5",
     digitales:"si"},

     {codigo:"39000",
     nombre:"LEY 5110 PROV. STA. FE",
     arancel:"69",
     digitales:"si"},

     {codigo:"38400",
     nombre:"MEDIFE",
     arancel:"75",
     digitales:"si"},
    ];

  constructor() { }

   ngOnInit(): void {
  }
   navigate() {
    console.log('click');
  }

 }
