import { Injectable } from '@angular/core';

import { contacto$ } from '../mocks/contactos.interface';
import { IContacto } from '../models/contacto.interface';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  obtenerContactos(): Promise<IContacto[]> {
    return Promise.resolve(contacto$)
  }

}
