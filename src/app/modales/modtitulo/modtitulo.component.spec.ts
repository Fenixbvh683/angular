import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModtituloComponent } from './modtitulo.component';

describe('ModtituloComponent', () => {
  let component: ModtituloComponent;
  let fixture: ComponentFixture<ModtituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModtituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModtituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
