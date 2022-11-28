import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModinfodereComponent } from './modinfodere.component';

describe('ModinfodereComponent', () => {
  let component: ModinfodereComponent;
  let fixture: ComponentFixture<ModinfodereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModinfodereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModinfodereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
