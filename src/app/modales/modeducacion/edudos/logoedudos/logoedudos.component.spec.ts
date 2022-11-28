import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoedudosComponent } from './logoedudos.component';

describe('LogoedudosComponent', () => {
  let component: LogoedudosComponent;
  let fixture: ComponentFixture<LogoedudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoedudosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoedudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
