import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit{

  constructor( private fb: FormBuilder ){}

  miFormulario: FormGroup = new FormGroup({});


  ngOnInit(): void {
    this.miFormulario = this.fb.group({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      direccion: ''
    })

  }



}
