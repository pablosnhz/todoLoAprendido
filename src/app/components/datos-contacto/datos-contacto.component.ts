import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactoService } from '../../services/contacto.service';
import { IContacto } from 'src/app/models/contacto.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-datos-contacto',
  templateUrl: './datos-contacto.component.html',
  styleUrls: ['./datos-contacto.component.scss']
})
export class DatosContactoComponent implements OnInit, OnDestroy{

  constructor( private contactoService: ContactoService ){}

  listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;
  suscripcion: Subscription | undefined;


  ngOnInit(): void {
    this.contactoService.obtenerContactos()
    .then((lista: IContacto[]) => this.listaContactos = lista)
    .catch((error) => console.log(`Ocurrió un error: ${error}`))
    .finally(() => console.log('Datos traídos con éxito!'));
  }

  obtenerContacto(id: number){
    this.suscripcion = this.contactoService.obtenerContactoId(id)?.subscribe(
      (contacto: IContacto) => this.contactoSeleccionado = contacto
    )
  }


  eliminarContacto(nombre: string): void {
    // Supongamos que contacto$ es un array de contactos
    this.listaContactos = this.listaContactos.filter(contacto => contacto.nombre !== nombre);
}

  ngOnDestroy(): void {
    this.suscripcion?.unsubscribe();
  }
}
