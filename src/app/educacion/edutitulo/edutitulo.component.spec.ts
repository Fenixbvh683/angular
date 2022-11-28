import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdutituloComponent } from './edutitulo.component';

describe('EdutituloComponent', () => {
  let component: EdutituloComponent;
  let fixture: ComponentFixture<EdutituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdutituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdutituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
