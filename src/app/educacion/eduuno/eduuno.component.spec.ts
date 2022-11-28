import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduunoComponent } from './eduuno.component';

describe('EduunoComponent', () => {
  let component: EduunoComponent;
  let fixture: ComponentFixture<EduunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
