import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotojlComponent } from './fotojl.component';

describe('FotojlComponent', () => {
  let component: FotojlComponent;
  let fixture: ComponentFixture<FotojlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotojlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotojlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
