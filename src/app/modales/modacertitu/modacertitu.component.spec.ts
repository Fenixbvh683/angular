import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModacertituComponent } from './modacertitu.component';

describe('ModacertituComponent', () => {
  let component: ModacertituComponent;
  let fixture: ComponentFixture<ModacertituComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModacertituComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModacertituComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
