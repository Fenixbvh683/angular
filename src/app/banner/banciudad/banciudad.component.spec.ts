import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanciudadComponent } from './banciudad.component';

describe('BanciudadComponent', () => {
  let component: BanciudadComponent;
  let fixture: ComponentFixture<BanciudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanciudadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanciudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
