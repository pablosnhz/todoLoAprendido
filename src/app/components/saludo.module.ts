import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaludoComponent } from './saludo/saludo.component';
import { ListaBasicaComponent } from './lista-basica/lista-basica.component';



@NgModule({
  declarations: [
    SaludoComponent,
    ListaBasicaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SaludoComponent,
    ListaBasicaComponent,
  ]
})
export class SaludoModule { }
