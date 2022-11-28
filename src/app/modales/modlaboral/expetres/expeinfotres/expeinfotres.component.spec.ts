import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeinfotresComponent } from './expeinfotres.component';

describe('ExpeinfotresComponent', () => {
  let component: ExpeinfotresComponent;
  let fixture: ComponentFixture<ExpeinfotresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpeinfotresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpeinfotresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
