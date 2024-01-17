import { Injectable } from '@angular/core';
import { ILista } from '../models/contactLista.interface';
import { LISTA_CONTACTOS$ } from '../mocks/listaContactos.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {

  constructor() { }

  listaContactos: ILista[] = LISTA_CONTACTOS$;

  obtenerGenero(sexo?: string): Promise<ILista[]>{
    if(sexo == 'hombre' || sexo == 'mujer'){
      let listaFiltrada: ILista[] = this.listaContactos.filter(
      (contacto) => contacto.sexo == sexo)
      return Promise.resolve(listaFiltrada);
    } else if (sexo == 'todos'){
      return Promise.resolve(this.listaContactos)
    } else {
      return Promise.reject('filtro no valido');
    }
  }

}
