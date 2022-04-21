import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarCaracteristicaComponent } from './bar-caracteristica.component';

describe('BarCaracteristicaComponent', () => {
  let component: BarCaracteristicaComponent;
  let fixture: ComponentFixture<BarCaracteristicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarCaracteristicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarCaracteristicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
