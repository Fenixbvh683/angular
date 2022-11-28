import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanbotonesComponent } from './banbotones.component';

describe('BanbotonesComponent', () => {
  let component: BanbotonesComponent;
  let fixture: ComponentFixture<BanbotonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanbotonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanbotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
