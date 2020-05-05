import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormacionesService {

  constructor(public http: HttpClient) {
    console.log("servicio funcionando")
   }


  obtenerUsuario(){

    let url = "http://localhost:3000" + '/usuarios'; 
    console.log(url)
    return this.http.get(url);
    
     
  } 
    
}

