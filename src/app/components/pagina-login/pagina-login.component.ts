import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.scss']
})
export class PaginaLoginComponent implements OnInit{


  constructor( private fb: FormBuilder , private route: Router){}

  loginFormulario: FormGroup = new FormGroup({})

  @Output() loginAction: EventEmitter<{}> = new EventEmitter<{}>;


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


  submitLogin(){
    if(this.loginFormulario.valid){
      // console.table(this.loginFormulario.value);

      this.loginAction.emit(this.loginFormulario.value);

    }
  }

}
