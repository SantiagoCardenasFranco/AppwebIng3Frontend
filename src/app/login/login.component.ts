import {Component, ViewChild} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Login} from './login';
import { LoginService } from './login.service';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import {MatSnackBar} from '@angular/material/snack-bar';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login:Login = new Login();

  loginForm = new FormGroup({
    nombre : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required])
  });

  matcher = new MyErrorStateMatcher();

  displayedColumns: string[] = ['nombre', 'password'];
  dataSource: any;

  @ViewChild(MatTable) table!: MatTable<Login>;

  constructor(private loginService: LoginService, private notification: MatSnackBar) {
    this.dataSource = new MatTableDataSource();
  }
  

  onIniciarSesion() : void {

    this.login.nombre=this.loginForm.get('nombre')?.value;
    this.login.password=this.loginForm.get('password')?.value;
    
    this.loginService.add(this.login).subscribe(respuesta => {
      let token = respuesta.valor;
      window.localStorage.setItem("token", token as string);
      window.location.href = '/listarUsuario';
    });

  }


}
