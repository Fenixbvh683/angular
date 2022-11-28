import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedosComponent } from './expedos.component';

describe('ExpedosComponent', () => {
  let component: ExpedosComponent;
  let fixture: ComponentFixture<ExpedosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpedosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpedosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
