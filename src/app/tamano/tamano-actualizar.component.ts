import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import {TamanosEspecificacion} from './tamano';

import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import {MatSnackBar} from '@angular/material/snack-bar';
import { TamanoService } from './tamano.service';
import { EventEmitter } from '@angular/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-tamano',
  templateUrl: './tamano-actualizar.component.html',
  styleUrls: ['./tamano.component.scss']
})
export class TamanoActualizarComponent implements OnInit {

  tamanoForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    nombre : new FormControl('', [Validators.required]),
    especificacion : new FormControl('', [Validators.required])
  });

  matcher = new MyErrorStateMatcher();

  displayedColumns: string[] = ['id', 'nombre', 'especificacion'];
  dataSource: any;

  @ViewChild(MatTable) table!: MatTable<TamanosEspecificacion>;

  constructor(private tamanoSerive: TamanoService, private notification: MatSnackBar) {
    this.dataSource = new MatTableDataSource();
   }

   ngOnInit(): void {
  }

  onClicActualizar(){
    this.tamanoSerive.put(this.tamanoForm.value).subscribe(respuesta =>{
        this.notification.open('Actualización Exitosa');
    });
  }
}
