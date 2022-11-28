import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modinfoder1Component } from './modinfoder1.component';

describe('Modinfoder1Component', () => {
  let component: Modinfoder1Component;
  let fixture: ComponentFixture<Modinfoder1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modinfoder1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modinfoder1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
