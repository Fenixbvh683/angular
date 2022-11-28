import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabotituloComponent } from './labotitulo.component';

describe('LabotituloComponent', () => {
  let component: LabotituloComponent;
  let fixture: ComponentFixture<LabotituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabotituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabotituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
