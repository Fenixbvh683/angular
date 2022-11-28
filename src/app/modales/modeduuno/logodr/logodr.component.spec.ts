import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogodrComponent } from './logodr.component';

describe('LogodrComponent', () => {
  let component: LogodrComponent;
  let fixture: ComponentFixture<LogodrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogodrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogodrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
