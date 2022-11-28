import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Redes3Component } from './redes3.component';

describe('Redes3Component', () => {
  let component: Redes3Component;
  let fixture: ComponentFixture<Redes3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Redes3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Redes3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
