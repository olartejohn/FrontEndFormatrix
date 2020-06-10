import { Component, OnInit } from "@angular/core";
import { FormacionesService } from 'src/app/services/formaciones.service';
import { UtilidadService } from 'src/app/services/utilidades.service';
import { Formacion } from 'src/app/models/formacion.model';

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  
  listaTipos :  Array<any>;
  listaCompetencias :  Array<any>;
  listaHabilitadores :  Array<any>;
  formacion = new Formacion();

  constructor(public formacionService: FormacionesService, public utilidadService : UtilidadService ) {
    this.listaTipos =  new Array<any>();
    this.listaCompetencias =  new Array<any>();
    this.listaHabilitadores = new Array<any>();

  }
  
  ngOnInit() {
      //this.obtenerParametros();
      this.obtenerUtilidades();
      console.log("Me ejecute");
  }

 /* obtenerParametros(){

    this.utilidadService.obtenerUtilidad()
      .subscribe(result => {
        console.log("Request++++++++++"+result);
        this.listaTipos= result;
      });
      console.log("lista tipos++++++++++"+this.listaTipos);
  }*/

  obtenerUtilidades(){

    this.utilidadService.getUtilidad()
      .subscribe((data) => {
           console.log(data)
           this.listaTipos = data.datos; 
           this.listaCompetencias = data.datos;  
           this.listaHabilitadores = data.datos;
      });
     // console.log("lista tipos++++++++++"+this.listaTipos);
  }      
      
}
