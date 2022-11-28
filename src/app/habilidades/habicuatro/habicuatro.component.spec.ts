import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabicuatroComponent } from './habicuatro.component';

describe('HabicuatroComponent', () => {
  let component: HabicuatroComponent;
  let fixture: ComponentFixture<HabicuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabicuatroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabicuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
