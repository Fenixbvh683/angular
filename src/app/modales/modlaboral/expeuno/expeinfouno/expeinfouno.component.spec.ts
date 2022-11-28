import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeinfounoComponent } from './expeinfouno.component';

describe('ExpeinfounoComponent', () => {
  let component: ExpeinfounoComponent;
  let fixture: ComponentFixture<ExpeinfounoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpeinfounoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpeinfounoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
