import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboinfounoComponent } from './laboinfouno.component';

describe('LaboinfounoComponent', () => {
  let component: LaboinfounoComponent;
  let fixture: ComponentFixture<LaboinfounoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboinfounoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboinfounoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
