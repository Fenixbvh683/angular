import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducuatroComponent } from './educuatro.component';

describe('EducuatroComponent', () => {
  let component: EducuatroComponent;
  let fixture: ComponentFixture<EducuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducuatroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
