import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModhabitresComponent } from './modhabitres.component';

describe('ModhabitresComponent', () => {
  let component: ModhabitresComponent;
  let fixture: ComponentFixture<ModhabitresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModhabitresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModhabitresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
