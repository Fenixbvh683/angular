import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabiunoComponent } from './habiuno.component';

describe('HabiunoComponent', () => {
  let component: HabiunoComponent;
  let fixture: ComponentFixture<HabiunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabiunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabiunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
