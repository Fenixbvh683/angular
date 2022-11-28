import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModacerinfoComponent } from './modacerinfo.component';

describe('ModacerinfoComponent', () => {
  let component: ModacerinfoComponent;
  let fixture: ComponentFixture<ModacerinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModacerinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModacerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
