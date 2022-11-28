import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplogodosComponent } from './explogodos.component';

describe('ExplogodosComponent', () => {
  let component: ExplogodosComponent;
  let fixture: ComponentFixture<ExplogodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplogodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplogodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
