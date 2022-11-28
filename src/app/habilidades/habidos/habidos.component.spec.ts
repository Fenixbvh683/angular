import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabidosComponent } from './habidos.component';

describe('HabidosComponent', () => {
  let component: HabidosComponent;
  let fixture: ComponentFixture<HabidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
