import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  services: any[] = [
    {
      codigo: 1,
      nombre: 'indicaciones',
      imagen:
        'https://drive.google.com/file/d/1E6Q9G_lBq-ObkwxpirtvlL6T5xOIY7Pc/view?usp=sharing',
      descripcion:
        'Aquí podrá consultar como debe prepararse para concurrir al laboratorio, según los análisis solicitados por su Médico.',
    },

    {
      codigo: 2,
      nombre: 'obras sociales',
      imagen:
        'https://drive.google.com/file/d/1E6Q9G_lBq-ObkwxpirtvlL6T5xOIY7Pc/view?usp=sharing',
      descripcion:
        'Listado de las obras sociales que atendemos. Si no encuentra su cobertura médica utilice el formulario de contacto para consultarnos.',
    },
    {
      codigo: 3,
      nombre: 'autorizaciones',
      imagen:
        'https://drive.google.com/file/d/1E6Q9G_lBq-ObkwxpirtvlL6T5xOIY7Pc/view?usp=sharing',
      descripcion:
        'Ingrese a esta sección para iniciar el trámite de autorización de sus ordenes y agilizar su atención.',
    },
    {
      codigo: 4,
      nombre: 'domicilios',
      imagen:
        'https://drive.google.com/file/d/1E6Q9G_lBq-ObkwxpirtvlL6T5xOIY7Pc/view?usp=sharing',
      descripcion:
        'Complete el formulario para solicitar la toma de las muestras en su domicilio.',
    },
    {
      codigo: 5,
      nombre: 'presupuestos',
      imagen:
        'https://drive.google.com/file/d/1E6Q9G_lBq-ObkwxpirtvlL6T5xOIY7Pc/view?usp=sharing',
      descripcion:
        'Completando el formulario a continuación podrá solicitar un presupuesto para sus análisis.',
    },
    {
      codigo: 6,
      nombre: 'formulario de contacto',
      imagen:
        'https://drive.google.com/file/d/1E6Q9G_lBq-ObkwxpirtvlL6T5xOIY7Pc/view?usp=sharing',
      descripcion:
        'Complete el formulario para solicitar información adicional.',
    },
  ];

  constructor() {}
  getServicio(codigo: number) {
    return this.services[codigo];
  
  }

  
}
