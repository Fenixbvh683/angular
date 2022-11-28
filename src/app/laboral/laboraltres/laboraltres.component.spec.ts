import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboraltresComponent } from './laboraltres.component';

describe('LaboraltresComponent', () => {
  let component: LaboraltresComponent;
  let fixture: ComponentFixture<LaboraltresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboraltresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboraltresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
