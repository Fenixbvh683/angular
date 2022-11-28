import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpetituloComponent } from './expetitulo.component';

describe('ExpetituloComponent', () => {
  let component: ExpetituloComponent;
  let fixture: ComponentFixture<ExpetituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpetituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpetituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
