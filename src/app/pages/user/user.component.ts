import { Component, OnInit } from "@angular/core";
import { FormacionesService } from 'src/app/services/formaciones.service';
import { UtilidadService } from 'src/app/services/utilidades.service';

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  constructor(public formacionService: FormacionesService, public utilidadService : UtilidadService ) {}
  listaTipos :  Array<any>;
  ngOnInit() {
      this.obtenerParametros();
     // this.obtenerUtilidades();
      console.log("Me ejecute");
    

  }

  obtenerParametros(){

    this.utilidadService.obtenerUtilidad()
      .subscribe(result => {
        console.log("Request++++++++++"+result);
        this.listaTipos= result;
      });
      console.log("lista tipos++++++++++"+this.listaTipos);
  }

  
  obtenerUtilidades(){

    this.utilidadService.getUtilidad()
      .subscribe((data) => {
           console.log(data)
           this.listaTipos.push(data);   
      });
     // console.log("lista tipos++++++++++"+this.listaTipos);
  }
      
      
}
