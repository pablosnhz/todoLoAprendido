import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LISTA_CONTACTOS$ } from 'src/app/mocks/listaContactos.interface';
import { ILista } from 'src/app/models/contactLista.interface';
import { ContactListService } from 'src/app/services/contact-list.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit{

  listaContactos: ILista[] = LISTA_CONTACTOS$;
  filtroSexo: string = '';

  constructor(  private route: Router,
                private routerParams: ActivatedRoute,
                private contactList: ContactListService ){}

  ngOnInit(): void {
    this.routerParams.queryParams.subscribe((params: any) => {
      console.log('QueryParams', params.sexo)
        if(params.sexo){
          this.filtroSexo = params.sexo;
        }

    // ACA OBTENEMOS LA SEPARACION ENTRE GENERO, HOMBRE Y MUJER
    this.contactList.obtenerGenero(this.filtroSexo)
    .then((lista) => this.listaContactos = lista)
    .catch((error) => console.error(`Ha ocurrido un error al obtener el genero ${error} `))
    .finally(() => console.log(`Peticion de genero realizada con exito!`))
    })
  }

  volverConContacto(contacto: ILista){
    let navigationExtras: NavigationExtras = {
      state: {
        data: contacto
      }
    }
    this.route.navigate(['/home'], navigationExtras)
  }
}
