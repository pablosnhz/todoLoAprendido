import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.scss']
})
export class PaginaLoginComponent implements OnInit{


  constructor( private fb: FormBuilder ){}

  loginFormulario: FormGroup = new FormGroup({})

  ngOnInit(): void {
    this.loginFormulario = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })
  }

  get email(){
    return this.loginFormulario.get('email');
  }

  get password(){
    return this.loginFormulario.get('password');
  }

}
