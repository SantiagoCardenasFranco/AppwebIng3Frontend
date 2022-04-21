import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBoardComponent } from './component-board.component';

describe('ComponentBoardComponent', () => {
  let component: ComponentBoardComponent;
  let fixture: ComponentFixture<ComponentBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
