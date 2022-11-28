import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Redes1Component } from './redes1.component';

describe('Redes1Component', () => {
  let component: Redes1Component;
  let fixture: ComponentFixture<Redes1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Redes1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Redes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
