import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaludoComponent } from './saludo/saludo.component';
import { ListaBasicaComponent } from './lista-basica/lista-basica.component';
import { DatosContactoComponent } from './datos-contacto/datos-contacto.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SaludoComponent,
    ListaBasicaComponent,
    DatosContactoComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SaludoComponent,
    ListaBasicaComponent,
    DatosContactoComponent,
    LoginFormComponent
  ]
})
export class SaludoModule { }
