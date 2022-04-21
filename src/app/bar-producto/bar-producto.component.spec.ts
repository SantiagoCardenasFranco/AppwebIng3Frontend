import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarProductoComponent } from './bar-producto.component';

describe('BarProductoComponent', () => {
  let component: BarProductoComponent;
  let fixture: ComponentFixture<BarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
