import { Injectable } from '@angular/core';

import { contacto$ } from '../mocks/contactos.interface';
import { IContacto } from '../models/contacto.interface';
import { Observable } from 'rxjs';
import { ILista } from '../models/contactLista.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  obtenerContactos(): Promise<IContacto[]> {
    return Promise.resolve(contacto$)
  }

  obtenerContactoId(id: number): Observable<IContacto> | undefined {
    const contacto = contacto$.find((contacto: IContacto) => contacto.id === id);

    let observable: Observable<IContacto> = new Observable(observer => {
      observer.next(contacto);
      observer.complete();
    })

    if(contacto){
      return observable
    } else {
      return
    }
  }



}
