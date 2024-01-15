import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrls: ['./formulario-anidado.component.scss']
})
export class FormularioAnidadoComponent implements OnInit{

  constructor( private fb: FormBuilder ){}

  miFormularioAnidado: FormGroup = new FormGroup({});



  ngOnInit(): void {

    const telefonoMovil = this.fb.group({
      prefijo: '',
      numero: ''
    })

    const telefonoFijo = this.fb.group({
      prefijo: '',
      numero: ''
    })

    this.miFormularioAnidado = this.fb.group({
      telefonoMovil: telefonoMovil,
      telefonoFijo: telefonoFijo
    })


  }



}
