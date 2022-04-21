import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarProductoGeneralComponent } from './bar-producto-general.component';

describe('BarProductoGeneralComponent', () => {
  let component: BarProductoGeneralComponent;
  let fixture: ComponentFixture<BarProductoGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarProductoGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarProductoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
