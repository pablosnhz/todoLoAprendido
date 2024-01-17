import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ILista } from 'src/app/models/contactLista.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  constructor( private route: Router ){}

  contactoSeleccionado: ILista | undefined;

  ngOnInit(): void {
    if(history.state.data){
      console.log(history.state.data);
      this.contactoSeleccionado = history.state.data;
    }
  }

  navegarAContacts(){
    // al principio tenia el navegar contactos con el route.navigate
    // que me lleva a contacts, al agregar navigation estaria haciendo
    // lo mismo mmmm dudoso el 'todos'
    let navigationExtras: NavigationExtras = {
      queryParams: {
        sexo: 'todos'
      }
    }
    this.route.navigate(['/contacts'], navigationExtras);
  }
}
