import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModproyectosComponent } from './modproyectos.component';

describe('ModproyectosComponent', () => {
  let component: ModproyectosComponent;
  let fixture: ComponentFixture<ModproyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModproyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
