import { Component } from '@angular/core';
import { IProductos } from 'src/app/models/productos';

@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.scss']
})
export class ListaBasicaComponent {

  cargando: boolean = true;

  listaProducto: IProductos[] = [{
    nombre: 'Leche',
    precio: 10,
    description: 'Lacteos de la vaca'
  },
  {
    nombre: 'Carne',
    precio: 50,
    description: 'Carne de la vaca'
  },
  {
    nombre: 'Cereal',
    precio: 20,
    description: 'Cereales hechos desde nose donde'
  }
]

  cambiarCargando(){
    this.cargando = !this.cargando;
  }




}
