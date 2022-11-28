import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModlaboralComponent } from './modlaboral.component';

describe('ModlaboralComponent', () => {
  let component: ModlaboralComponent;
  let fixture: ComponentFixture<ModlaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModlaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModlaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
