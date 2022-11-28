import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BantituloComponent } from './bantitulo.component';

describe('BantituloComponent', () => {
  let component: BantituloComponent;
  let fixture: ComponentFixture<BantituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BantituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BantituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
