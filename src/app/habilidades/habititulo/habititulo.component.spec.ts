import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitituloComponent } from './habititulo.component';

describe('HabitituloComponent', () => {
  let component: HabitituloComponent;
  let fixture: ComponentFixture<HabitituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
