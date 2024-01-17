import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LISTA_CONTACTOS$ } from 'src/app/mocks/listaContactos.interface';
import { ILista } from 'src/app/models/contactLista.interface';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent {

  listaContactos: ILista[] = LISTA_CONTACTOS$;

  constructor( private route: Router ){}

  volverConContacto(contacto: ILista){
    let navigationExtras: NavigationExtras = {
      state: {
        data: contacto
      }
    }
    this.route.navigate(['/home'], navigationExtras)
  }
}
