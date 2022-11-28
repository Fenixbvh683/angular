import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModhabitituloComponent } from './modhabititulo.component';

describe('ModhabitituloComponent', () => {
  let component: ModhabitituloComponent;
  let fixture: ComponentFixture<ModhabitituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModhabitituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModhabitituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
