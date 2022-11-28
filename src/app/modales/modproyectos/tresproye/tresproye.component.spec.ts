import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TresproyeComponent } from './tresproye.component';

describe('TresproyeComponent', () => {
  let component: TresproyeComponent;
  let fixture: ComponentFixture<TresproyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TresproyeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TresproyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
