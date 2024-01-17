import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor( private route: Router ){}

  title = 'repasoPrimerosPasos';

  user = 'Hola input'
  user1 = 'Mensaje mostrado para el output'

  recibiendoOutput(evento: string){
    alert(evento);
  }

  token: string | null = '';

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
  }

  logout(){
    sessionStorage.removeItem('token');
    this.route.navigate(['login'])
  }

}
