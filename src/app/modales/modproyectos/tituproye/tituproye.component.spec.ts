import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituproyeComponent } from './tituproye.component';

describe('TituproyeComponent', () => {
  let component: TituproyeComponent;
  let fixture: ComponentFixture<TituproyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituproyeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituproyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
