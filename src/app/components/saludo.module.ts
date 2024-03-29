import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaludoComponent } from './saludo/saludo.component';
import { ListaBasicaComponent } from './lista-basica/lista-basica.component';
import { DatosContactoComponent } from './datos-contacto/datos-contacto.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './forms/formulario/formulario.component';
import { FormularioAnidadoComponent } from './forms/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './forms/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './forms/formulario-validado/formulario-validado.component';
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';



@NgModule({
  declarations: [
    SaludoComponent,
    ListaBasicaComponent,
    DatosContactoComponent,
    LoginFormComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,
    PaginaLoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SaludoComponent,
    ListaBasicaComponent,
    DatosContactoComponent,
    LoginFormComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,
    PaginaLoginComponent
  ]
})
export class SaludoModule { }
