import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-producto-general',
  templateUrl: './bar-producto-general.component.html',
  styleUrls: ['./bar-producto-general.component.scss']
})
export class BarProductoGeneralComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
