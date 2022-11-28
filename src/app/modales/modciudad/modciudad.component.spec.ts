import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModciudadComponent } from './modciudad.component';

describe('ModciudadComponent', () => {
  let component: ModciudadComponent;
  let fixture: ComponentFixture<ModciudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModciudadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModciudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
