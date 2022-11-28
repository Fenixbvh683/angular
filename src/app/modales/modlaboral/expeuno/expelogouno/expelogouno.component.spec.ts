import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpelogounoComponent } from './expelogouno.component';

describe('ExpelogounoComponent', () => {
  let component: ExpelogounoComponent;
  let fixture: ComponentFixture<ExpelogounoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpelogounoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpelogounoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
