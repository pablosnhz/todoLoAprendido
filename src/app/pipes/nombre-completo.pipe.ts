import { Pipe, PipeTransform } from '@angular/core';
import { ILista } from '../models/contactLista.interface';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(contacto: ILista, ...args: unknown[]): unknown {
    return `${contacto.nombre} ${contacto.apellido}`;
  }

}
