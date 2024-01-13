import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent {


  @Input() saluda: string = 'hola';
  mensajeOutput: string = 'saludos output';

  @Output() adios: EventEmitter<string> = new EventEmitter<string>();


  adiosEnvio(){
    this.adios.emit(`este es en Output enviado desde el typescript ${ this.mensajeOutput }`)
  }


}
