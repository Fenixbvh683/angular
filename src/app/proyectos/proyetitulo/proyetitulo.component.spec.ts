import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyetituloComponent } from './proyetitulo.component';

describe('ProyetituloComponent', () => {
  let component: ProyetituloComponent;
  let fixture: ComponentFixture<ProyetituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyetituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyetituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
