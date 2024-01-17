import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{

  email: string = '';
  password: string = '';


  constructor( private auth: AuthService, private route: Router ){}

  ngOnInit(): void {

  }


  loginUser(value: any){

    let { email, password } = value;

      this.auth.login(email, password).subscribe(
        (response) => {
          if(response.token){

            sessionStorage.setItem('token', response.token);

            this.route.navigate(['home']);
          }
        },
        (error) => console.error(`Ha ocurrido un error al hacer el login ${error}`),
        () => console.info(`Peticion de login con exito!`)
      )
    }
}
