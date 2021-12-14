import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-indicaciones',
  templateUrl: './indicaciones.component.html',
  styleUrls: ['./indicaciones.component.scss'],
})
export class IndicacionesComponent implements OnInit {
  analisis: any[] = [
    {
      _id: {
        $oid: '61b669fc955b9a4a6505ba62',
      },
      codigo: '0002',
      nombre: 'ACETONURIA',
      UB: '1,00',
      frecuencia: 'PMO',
      idprep: '61af48f15dec548015ec87bf',
    },
    {
      _id: {
        $oid: '61b66a37955b9a4a6505ba63',
      },
      codigo: '0056',
      nombre: 'ANTINUCLEARESANTICUERPOS(FAN/ANA/AAN)',
      UB: '7,00',
      frecuencia: 'PMO',
      idprep: '61af48f15dec548015ec87bf',
    },
    {
      _id: {
        $oid: '61b78e8a66cdcfb47a53e272',
      },
      codigo: '0133',
      nombre: 'CALCEMIA TOTAL(Ca)',
      UB: '1,50',
      frecuencia: 'PMO',
      idprep: '61af48f15dec548015ec87bf',
    },
    {
      _id: {
          $oid: "61b78f3866cdcfb47a53e273"
      },
      codigo: "0144",
      nombre: "CEACARCINOEMBRIOGENICO",
      UB: "12,50",
      frecuencia: "PMO",
      idprep: "61af48f15dec548015ec87bf"
  },
  {
    _id: {
        $oid: "61b78f8566cdcfb47a53e274"
    },
    codigo: "0174",
    nombre: "COLESTEROLTOTAL",
    UB: "1,50",
    frecuencia: "PMO",
    idprep: "61af48f15dec548015ec87be"
}

  ];

  // constructor(private actRoute: ActivatedRoute, private servsrv: ServiciosService) {
  //   this.actRoute.params.subscribe((params) => {
  //     this.analisis= this.servsrv.getServicio(params['id']);
  //     console.log(this.analisis);
     
  //   });
  // }

  ngOnInit(): void {}

  navigate() {
    console.log('click');
  }
}
