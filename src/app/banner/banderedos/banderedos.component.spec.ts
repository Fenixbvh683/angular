import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanderedosComponent } from './banderedos.component';

describe('BanderedosComponent', () => {
  let component: BanderedosComponent;
  let fixture: ComponentFixture<BanderedosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanderedosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanderedosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
