import { Component, OnInit } from "@angular/core";
import { FormacionesService } from 'src/app/services/formaciones.service';

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html"
})
export class TablesComponent implements OnInit {
  constructor(public formacionService: FormacionesService) {}
  listaFormaciones : any;

  ngOnInit() {

    //this.listaFormaciones = this.formacionService.obtenerFormaciones();
    this.listaFormaciones = this.formacionService.getFormaciones();
    console.log("lista formaciones---"+this.listaFormaciones)

  }
}
