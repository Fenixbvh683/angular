import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboraunologoComponent } from './laboraunologo.component';

describe('LaboraunologoComponent', () => {
  let component: LaboraunologoComponent;
  let fixture: ComponentFixture<LaboraunologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboraunologoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboraunologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
