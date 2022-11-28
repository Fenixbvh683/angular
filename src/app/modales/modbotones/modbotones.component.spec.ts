import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModbotonesComponent } from './modbotones.component';

describe('ModbotonesComponent', () => {
  let component: ModbotonesComponent;
  let fixture: ComponentFixture<ModbotonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModbotonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModbotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
