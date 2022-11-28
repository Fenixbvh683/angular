import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitresComponent } from './habitres.component';

describe('HabitresComponent', () => {
  let component: HabitresComponent;
  let fixture: ComponentFixture<HabitresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
