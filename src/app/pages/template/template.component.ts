import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Fernando',
    apellido: 'Herrera',
    correo:'fernando@gmail.com'
  }

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getPaises();
  
  }

  guardar( forma:NgForm ){
    console.log( forma );
    if( forma.invalid ){
        //Se extraen todos los valores de los formularios
        Object.values( forma.controls).forEach( control =>{
            control.markAsTouched();
        });
    }

    console.log( forma.value );
  }

}
