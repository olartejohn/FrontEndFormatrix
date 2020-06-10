import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs'
import {Router} from '@angular/router';
import { map } from 'rxjs/operators';
import { Utilidad } from '../models/utilidad.model';

 
@Injectable()

export class UtilidadService {
 
constructor(public http: HttpClient) {
  console.log("Servicio funcionando") 
}
 
crearUsuario(utilidad: Utilidad){

    let url = "http://localhost:3000" + '/utilidades'; 
    console.log(url)
    return this.http.post(url,utilidad);

 
  } 

obtenerUtilidad()  : Observable<any> {
    let url = "http://localhost:3000" + '/utilidades'; 

    //return this.http.get(url).pipe(map(data => {}));
   return this.http.get<{response: Utilidad[]}>(url).pipe(
    map(response => response.response)
    
  );
     
  } 

  
getUtilidad() : Observable<any> {
  let url = "http://localhost:3000" + '/utilidades'; 
   // let url= "https://jsonplaceholder.typicode.com/users";
  //return this.http.get(url).pipe(map(data => {}));
    return this.http.get<any>(url);
  }



}

