import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Producto } from './producto';
import { ProductoService } from './producto.service'; 

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
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productoForm = new FormGroup({
    nombre : new FormControl('', [Validators.required]),
    usuario : new FormControl('', [Validators.required]),
    caracteristicaForm : new FormControl('', [Validators.required])
  });


  matcher = new MyErrorStateMatcher();

  displayedColumnsProducto: string[] = ['nombre', 'usuario', 'caracteristica'];
  dataSource: any;

  @ViewChild(MatTable) table!: MatTable<Producto>;

  constructor(private productoService: ProductoService, private notification: MatSnackBar) {
    this.dataSource = new MatTableDataSource();
  }
  
  ngOnInit(): void {
    this.listar();
  }

  private listar() {
    this.productoService.getAll().subscribe(respuesta => {
      this.dataSource = respuesta;
      this.table.renderRows();
    });
  }

  onClickCrear() : void {
    this.productoService.addP(this.productoForm.value).subscribe(respuesta => {
      this.notification.open('Creación exitosa');
    });
  }
}
