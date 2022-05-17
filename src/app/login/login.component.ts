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
  

  onClickCrear() : void {
    this.loginService.add(this.loginForm.value).subscribe(respuesta => {
      this.notification.open('Creación exitosa');
    });
  }
}
