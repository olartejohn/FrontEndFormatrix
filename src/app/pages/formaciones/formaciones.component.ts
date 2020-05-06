import { Component, OnInit } from '@angular/core';
import { FormacionesService } from 'src/app/services/formaciones.service';

@Component({
  selector: 'app-formaciones',
  templateUrl: './formaciones.component.html',
  styleUrls: ['./formaciones.component.scss']
})
export class FormacionesComponent implements OnInit {

  constructor(public formacionService: FormacionesService) { }


  ngOnInit(): void {
    console.log("Me ejecute");
    this.formacionService.obtenerUsuario();

  }

}
