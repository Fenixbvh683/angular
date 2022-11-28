import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModhabidosComponent } from './modhabidos.component';

describe('ModhabidosComponent', () => {
  let component: ModhabidosComponent;
  let fixture: ComponentFixture<ModhabidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModhabidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModhabidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
