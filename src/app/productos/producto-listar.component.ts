import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Producto } from './producto';
import { ProductoService } from './producto.service'; 

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
  selector: 'app-producto',
  templateUrl: './producto-listar.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductoListarComponent implements OnInit {

  productoForm = new FormGroup({
    nombre : new FormControl('', [Validators.required]),
  });

  matcher = new MyErrorStateMatcher();

  displayedColumns: string[] = ['nombre'];
  dataSource: any;

  @ViewChild(MatTable) table!: MatTable<Producto>;

  constructor(private productoService: ProductoService, private notification: MatSnackBar) {
    this.dataSource = new MatTableDataSource();
  }
  
  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.productoService.getAll().subscribe(respuesta => {
      this.dataSource = respuesta;
      this.table.renderRows();
    });
  }
}
