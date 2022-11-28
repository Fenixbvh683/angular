import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannombreComponent } from './bannombre.component';

describe('BannombreComponent', () => {
  let component: BannombreComponent;
  let fixture: ComponentFixture<BannombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
