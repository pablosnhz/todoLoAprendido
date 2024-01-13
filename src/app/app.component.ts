import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'repasoPrimerosPasos';

  user = 'Hola input'
  user1 = 'Mensaje mostrado para el output'


  recibiendoOutput(evento: string){
    alert(evento);
  }
}
