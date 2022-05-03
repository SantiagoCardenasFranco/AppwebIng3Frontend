import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-usuario',
  templateUrl: './bar-usuario.component.html',
  styleUrls: ['./bar-usuario.component.scss']
})
export class BarUsuarioComponent {

  constructor(private router: Router) { }

}
