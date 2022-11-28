import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcertituloComponent } from './acertitulo.component';

describe('AcertituloComponent', () => {
  let component: AcertituloComponent;
  let fixture: ComponentFixture<AcertituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcertituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcertituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
