import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaninfoderechaComponent } from './baninfoderecha.component';

describe('BaninfoderechaComponent', () => {
  let component: BaninfoderechaComponent;
  let fixture: ComponentFixture<BaninfoderechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaninfoderechaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaninfoderechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
