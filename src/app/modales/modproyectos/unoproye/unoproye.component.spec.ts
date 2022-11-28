import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnoproyeComponent } from './unoproye.component';

describe('UnoproyeComponent', () => {
  let component: UnoproyeComponent;
  let fixture: ComponentFixture<UnoproyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnoproyeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnoproyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
