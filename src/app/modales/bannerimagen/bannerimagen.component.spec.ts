import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerimagenComponent } from './bannerimagen.component';

describe('BannerimagenComponent', () => {
  let component: BannerimagenComponent;
  let fixture: ComponentFixture<BannerimagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerimagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerimagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
