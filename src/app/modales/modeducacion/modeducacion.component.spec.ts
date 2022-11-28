import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeducacionComponent } from './modeducacion.component';

describe('ModeducacionComponent', () => {
  let component: ModeducacionComponent;
  let fixture: ComponentFixture<ModeducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
