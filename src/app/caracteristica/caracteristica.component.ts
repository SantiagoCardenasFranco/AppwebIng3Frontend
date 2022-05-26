import { TamanosEspecificacion } from '../tamano/tamano';
import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Caracteristica } from './caracteristica';

import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import {MatSnackBar} from '@angular/material/snack-bar';
import { CaracteristicaService } from './caracteristica.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-caracteristica',
  templateUrl: './caracteristica.component.html',
  styleUrls: ['./caracteristica.component.scss']
})
export class CaracteristicaComponent implements OnInit{

  tamanos: Array<TamanosEspecificacion> = [];

  caracteristicaForm = new FormGroup({
    marca : new FormControl('', [Validators.required]),
    descripcion : new FormControl('', [Validators.required]),
    nombreTamano : new FormControl('', [Validators.required]),
    especificacionTamano : new FormControl('', [Validators.required]),
    proveedor : new FormControl('', [Validators.required])
  });

  matcher = new MyErrorStateMatcher();

  displayedColumns: string[] = ['marca', 'descripcion', 'nombre','especificacion', 'proveedor'];
  dataSource: any;

  @ViewChild(MatTable) table!: MatTable<Caracteristica>;

  constructor(private caracteristicaSerive: CaracteristicaService, private notification: MatSnackBar) {
    this.dataSource = new MatTableDataSource();
   }
  
  
  ngOnInit(): void {
    this.caracteristicaSerive.getAll().subscribe(respuesta => {
      this.dataSource = respuesta;
      this.table.renderRows();

      //this.tamanos = respuesta.tamano;
    });
}
}
