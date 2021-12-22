import { HttpClient, HttpClientModule } from '@angular/common/http';
import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Analisis, Obrasocial } from '../models/api-models';

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {

  initialServices: service[] = 
    [
      {
          codigo: 1,
          nombre: 'analisis',
          imagen: 'assets/Indicaciones.svg',
          descripcion:
            'Aquí podrá consultar como debe prepararse para concurrir al laboratorio, según los análisis solicitados por su Médico.',
        },
        {
          codigo: 2,
          nombre: 'obras sociales',
          imagen: 'assets/ObraSocial.svg',
          descripcion: 'Listado de las obras sociales que atendemos. Si no encuentra su cobertura médica utilice el formulario de contacto para consultarnos.',
        },
        {
          codigo: 3,
          nombre: 'autorizaciones',
          imagen: 'assets/Autorizaciones.svg',
          descripcion:  'Ingrese a esta sección para iniciar el trámite de autorización de sus ordenes de análisis y agilizar su atención el día de la extracción.                                 ',
            
        },
        {
          codigo: 4,
          nombre: 'extracciones a domicilio',
          imagen: 'assets/Domicilio.svg',
          descripcion:
            'Complete el formulario para solicitar la toma de las muestras en su domicilio.',
        },
        {
          codigo: 5,
          nombre: 'presupuestos',
          imagen:'assets/Presupuesto.svg',
          descripcion:
            'Completando el formulario a continuación podrá solicitar un presupuesto para sus análisis.',
        },
        {
          codigo: 6,
          nombre: 'formulario de contacto',
          imagen:'assets/FormularioContacto.svg',
          descripcion:
            'Complete el formulario para solicitar información adicional.',
        },

    ];


    constructor (private http: HttpClient) { }


 
  services$: BehaviorSubject<service[]> = new BehaviorSubject(this.initialServices);
  
   
 getAnalisis() {
   return this.http.get<Analisis>(`${environment.baseUrl}analisis`);

 }
 getObraSocial() {
  return this.http.get<Obrasocial>(`${environment.baseUrl}obrasocial`);

}
  
  
  getServices():Observable<service[]> {
   
     return this.services$.asObservable();
   }

   filterServicios(text: string){
   console.log(text);
    const filteredServicios = this.services$.value.filter((service) =>
        service.nombre.toLowerCase().includes(text.toLowerCase())
      );
      this.services$.next(filteredServicios);
    }
  resetServicios(){
    this.services$.next(this.initialServices);
  }
   }

   export interface service {
    codigo:  number
    nombre: string
    imagen: string
    descripcion: string
  
  }