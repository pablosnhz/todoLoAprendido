import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILista } from 'src/app/models/contactLista.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  constructor( private route: Router ){}

  contactoSeleccionado: ILista | undefined;

  navegarAContacts(){
    this.route.navigate(['/contacts']);
  }

  ngOnInit(): void {
      if(history.state.data){
        console.log(history.state.data);
        this.contactoSeleccionado = history.state.data;
      }
    }
}
