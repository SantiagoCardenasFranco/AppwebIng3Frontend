import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import {TamanosEspecificacion} from './tamano';

import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import {MatSnackBar} from '@angular/material/snack-bar';
import { TamanoService } from './tamano.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-tamano',
  templateUrl: './tamano-listar.component.html',
  styleUrls: ['./tamano.component.scss']
})
export class TamanoListarComponent implements OnInit {

  tamanoForm = new FormGroup({
    nombre : new FormControl('', [Validators.required]),
    especificacion : new FormControl('', [Validators.required])
  });

  matcher = new MyErrorStateMatcher();

  displayedColumns: string[] = ['nombre', 'especificacion'];
  dataSource: any;

  @ViewChild(MatTable) table!: MatTable<TamanosEspecificacion>;

  constructor(private tamanoSerive: TamanoService, private notification: MatSnackBar) {
    this.dataSource = new MatTableDataSource();
   }

   ngOnInit(): void {
  }

  onlistar() {
    this.tamanoSerive.getAll().subscribe(respuesta => {
      this.dataSource = respuesta;
      this.table.renderRows();
    });
  }
}
