import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpelogotresComponent } from './expelogotres.component';

describe('ExpelogotresComponent', () => {
  let component: ExpelogotresComponent;
  let fixture: ComponentFixture<ExpelogotresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpelogotresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpelogotresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
