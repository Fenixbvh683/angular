import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModnombreComponent } from './modnombre.component';

describe('ModnombreComponent', () => {
  let component: ModnombreComponent;
  let fixture: ComponentFixture<ModnombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModnombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModnombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
