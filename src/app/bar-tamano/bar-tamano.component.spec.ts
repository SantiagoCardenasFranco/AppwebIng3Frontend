import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarTamanoComponent } from './bar-tamano.component';

describe('BarTamanoComponent', () => {
  let component: BarTamanoComponent;
  let fixture: ComponentFixture<BarTamanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarTamanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarTamanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
