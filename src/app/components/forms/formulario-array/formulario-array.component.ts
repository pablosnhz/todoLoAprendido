import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

// IMPORTAMOS FORMARRAY ACA

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.scss']
})
export class FormularioArrayComponent implements OnInit{

  constructor( private fb: FormBuilder ){}
  miFormularioArray: FormGroup = new FormGroup({});

  ngOnInit(): void {

    this.miFormularioArray = this.fb.group({
      nombre: '',
      apellido: '',
      telefonos: this.fb.array([])
      // mencionamos el array para dar margen de que va a ser un
      // array de numeros telefonicos
    })
  }

  get telefonosFormulario(): FormArray {
    return this.miFormularioArray.get('telefonos') as FormArray
    // para obtener esos datos telefonicos va a ser mediante un get
    // de tipo array
  }

  anadirTelefono(){
    const telefono = this.fb.group({
      prefijo: '',
      numero: ''
    })
    this.telefonosFormulario.push(telefono)
    // hicimos la funcion para agregar un numero una vez puesto
    // los datos y tener la opcion de agregar mas de un numero.
  }

  eliminarTelefono(index: number){
    this.telefonosFormulario.removeAt(index)
    // funcion de eliminar que va a ir dentro del ng form el cual se va
    // a mostrar si queremos agregar un numero, al abrirse va a estar
    // la opcion para eliminar el numero.
  }

}

