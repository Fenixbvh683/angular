import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboraldosComponent } from './laboraldos.component';

describe('LaboraldosComponent', () => {
  let component: LaboraldosComponent;
  let fixture: ComponentFixture<LaboraldosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboraldosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboraldosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
