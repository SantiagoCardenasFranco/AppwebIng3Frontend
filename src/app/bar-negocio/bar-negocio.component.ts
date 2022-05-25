import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-negocio',
  templateUrl: './bar-negocio.component.html',
  styleUrls: ['./bar-negocio.component.scss']
})
export class BarNegocioComponent {

  constructor(private router: Router) {
  }
}
