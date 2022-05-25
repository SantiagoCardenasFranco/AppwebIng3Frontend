import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Persona} from './persona';
import { PersonaService } from './persona.service';

import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import {MatSnackBar} from '@angular/material/snack-bar';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-persona',
  templateUrl: './persona-listar.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaListarComponent implements OnInit {

  personaForm = new FormGroup({
    id : new FormControl('', [Validators.required]),
    nombre : new FormControl('', [Validators.required]),
    apellido : new FormControl('', [Validators.required]),
    correo : new FormControl('', [Validators.required]),
    opciones : new FormControl('', [Validators.required])
  });

  matcher = new MyErrorStateMatcher();

  displayedColumns: string[] = ['id','nombre', 'apellido', 'correo', 'opciones'];
  dataSource: any;

  @ViewChild(MatTable) table!: MatTable<Persona>;

  constructor(private personaService: PersonaService, private notification: MatSnackBar) {
    this.dataSource = new MatTableDataSource();
  }
  
  ngOnInit(): void {
    this.listar();
  }

  eliminar(){
    this.personaService.remove(this.personaForm.value).subscribe((data)=>{
      this.listar();
    }, (error)=>{
      alert('Ocurrio un error');
    });
  }

 listar() {
    this.personaService.getAll().subscribe(respuesta => {
      this.dataSource = respuesta;
      this.table.renderRows();
    });
  }
}
