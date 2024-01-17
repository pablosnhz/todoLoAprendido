import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ILista } from 'src/app/models/contactLista.interface';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent implements OnInit{

  id: any | undefined;
  contacto: ILista = {
    id: 0,
    nombre: '',
    apellido: '',
    email: '',
    sexo: 'mujer'
  }
  filtroprevio: string | undefined;

  constructor(  private router: ActivatedRoute,
                private route: Router ){}


  ngOnInit(): void {
    // llame al activatedRoute para hacer uso del PARAMS
    this.router.params.subscribe(
      (params: any) => {
        if(params.id){
          this.id = params.id;
        }
      }
    )
      // vamos a leer el STATE el contacto
      // history para leer
      // SIN ESTO DECLARADO EN EL CON EL [STATE] en contactsPage
      // los datos no se muestran en el detail
      if(history.state.data){
        this.contacto = history.state.data;
      }
    // lo declaramos en este html para luego llevarlo al otro html, con el [state]
      if(history.state.filtro){
        this.filtroprevio = history.state.filtro;
      }

  }
}
