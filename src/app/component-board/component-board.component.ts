import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-board',
  templateUrl: './component-board.component.html',
  styleUrls: ['./component-board.component.scss']
})
export class ComponentBoardComponent {
  constructor(private router: Router) {
  }
  
  ngOnInit(): void {
  }
}
