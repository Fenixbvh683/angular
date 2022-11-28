import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosproyeComponent } from './dosproye.component';

describe('DosproyeComponent', () => {
  let component: DosproyeComponent;
  let fixture: ComponentFixture<DosproyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DosproyeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DosproyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
