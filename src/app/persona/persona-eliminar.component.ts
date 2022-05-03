import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { PersonaService } from './persona.service';

import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import {MatSnackBar} from '@angular/material/snack-bar';
import { Persona } from './persona';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-persona',
  templateUrl: './persona-eliminar.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaEliminarComponent  {

  personaForm = new FormGroup({
    id : new FormControl('', [Validators.required])
  });

  matcher = new MyErrorStateMatcher();

  displayedColumns: string[] = ['id'];
  dataSource: any;

  @ViewChild(MatTable) table!: MatTable<Persona>;

  constructor(private personaService: PersonaService, private notification: MatSnackBar) {
    this.dataSource = new MatTableDataSource();
  }
  

  onClickEliminar(){
    this.personaService.remove(this.personaForm.value).subscribe(respuesta =>{
        this.notification.open('Eliminación Exitosa');
    });
  }
}
