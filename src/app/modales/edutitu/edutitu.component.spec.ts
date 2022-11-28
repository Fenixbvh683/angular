import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdutituComponent } from './edutitu.component';

describe('EdutituComponent', () => {
  let component: EdutituComponent;
  let fixture: ComponentFixture<EdutituComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdutituComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdutituComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
