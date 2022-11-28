import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EudtreslogoComponent } from './eudtreslogo.component';

describe('EudtreslogoComponent', () => {
  let component: EudtreslogoComponent;
  let fixture: ComponentFixture<EudtreslogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EudtreslogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EudtreslogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
