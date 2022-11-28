import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabicincoComponent } from './habicinco.component';

describe('HabicincoComponent', () => {
  let component: HabicincoComponent;
  let fixture: ComponentFixture<HabicincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabicincoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabicincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
