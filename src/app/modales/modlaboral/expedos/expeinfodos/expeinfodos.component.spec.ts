import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeinfodosComponent } from './expeinfodos.component';

describe('ExpeinfodosComponent', () => {
  let component: ExpeinfodosComponent;
  let fixture: ComponentFixture<ExpeinfodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpeinfodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpeinfodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
