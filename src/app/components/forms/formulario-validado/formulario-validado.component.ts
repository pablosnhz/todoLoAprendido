import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-validado',
  templateUrl: './formulario-validado.component.html',
  styleUrls: ['./formulario-validado.component.scss']
})
export class FormularioValidadoComponent implements OnInit{

  constructor( private fb: FormBuilder ){}

  miFormularioValidado: FormGroup = new FormGroup({});



  ngOnInit(): void {
    this.miFormularioValidado = this.fb.group({
      nombre: ['', Validators.required],
      apellido: '',
      edad: ['', Validators.compose([Validators.required, Validators.min(18), Validators.max(99)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
      acepta: [false, Validators.requiredTrue]
    })
  }

  get nombre(){
    return this.miFormularioValidado.get('nombre')
  }

  get apellido(){
    return this.miFormularioValidado.get('apellido')
  }

  get edad(){
    return this.miFormularioValidado.get('edad')
  }

  get email(){
    return this.miFormularioValidado.get('email')
  }

  get password(){
    return this.miFormularioValidado.get('password')
  }

  get acepta(){
    return this.miFormularioValidado.get('acepta')
  }

  enviarFormulario(){
    if(this.miFormularioValidado.valid){
      console.table(this.miFormularioValidado.value)


      // GUARDANDO DE PRUEBA EN LA SESSION STORAGE
      // sessionStorage.setItem('submit', 'devuelve el formulario')

      this.miFormularioValidado.reset();
    }
  }

}
