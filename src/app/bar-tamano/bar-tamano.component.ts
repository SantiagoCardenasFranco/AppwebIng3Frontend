import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-tamano',
  templateUrl: './bar-tamano.component.html',
  styleUrls: ['./bar-tamano.component.scss']
})
export class BarTamanoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
