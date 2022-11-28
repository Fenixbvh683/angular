import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyedosComponent } from './proyedos.component';

describe('ProyedosComponent', () => {
  let component: ProyedosComponent;
  let fixture: ComponentFixture<ProyedosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyedosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyedosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
