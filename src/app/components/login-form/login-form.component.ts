import { Component, OnInit } from '@angular/core';
import { IUsers, listaUsers } from 'src/app/models/datosReqres.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit{

  constructor( private authService: AuthService ){}

  ngOnInit(): void {
    this.loginAccess();
    this.usarios();
    this.busquedaFiltrada();
  }

  loginAccess(){
    this.authService.login('eve.holt@reqres.in', 'cityslicka').subscribe(
      (response) => {
        console.log(`Obtenemos la respuesta:`, response)

        sessionStorage.setItem('token', response.token);
      },
      (error) => console.error(`Ha ocurrido un error: ${error}`),
      () => console.log(`Se ha completado con exito el reqres!`)
    )
  }

  listaPeticion: listaUsers[] = [];

  usarios(){
    this.authService.users().subscribe(
      (data) => {
        this.listaPeticion = data.data;
        this.busquedaFiltrada();
      }
    );
  }

  listaFiltrada: listaUsers[] = [];
  filtroName: string = '';

  busquedaFiltrada(): void {
    const nombreCompletoBuscado = this.filtroName.toLowerCase().trim();
    this.listaFiltrada = this.listaPeticion.filter(user =>
      `${user.first_name} ${user.last_name}`.toLowerCase().includes(nombreCompletoBuscado)
    );
  }
}
