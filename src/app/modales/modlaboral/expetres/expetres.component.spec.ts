import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpetresComponent } from './expetres.component';

describe('ExpetresComponent', () => {
  let component: ExpetresComponent;
  let fixture: ComponentFixture<ExpetresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpetresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpetresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
