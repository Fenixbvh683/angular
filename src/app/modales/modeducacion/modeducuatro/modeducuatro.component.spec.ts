import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeducuatroComponent } from './modeducuatro.component';

describe('ModeducuatroComponent', () => {
  let component: ModeducuatroComponent;
  let fixture: ComponentFixture<ModeducuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeducuatroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeducuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
