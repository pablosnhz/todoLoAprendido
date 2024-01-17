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

      if(history.state.data){
        this.contacto = history.state.data;
      }

  }


  volverASeleccion(){
    this.route.navigate(['contacts'])
  }

}
