import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Formacion } from '../models/formacion.model';
import { Observable, of } from 'rxjs'
import {Router} from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormacionesService {

  constructor(public http: HttpClient) {
    console.log("servicio funcionando")
   }


  obtenerFormaciones(){

    let url = "http://localhost:3000" + '/formaciones'; 
    console.log(url)
    return this.http.get(url);
    
     
  } 
    

  
  getFormaciones()  : Observable<any> {
  let url = "http://localhost:3000" + '/utilidades'; 

    //return this.http.get(url).pipe(map(data => {}));
    return this.http.get<{response: Formacion[]}>(url).pipe(
    map(response => response.response)
  
);
   
} 

}

