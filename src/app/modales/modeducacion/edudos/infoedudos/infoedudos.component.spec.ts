import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoedudosComponent } from './infoedudos.component';

describe('InfoedudosComponent', () => {
  let component: InfoedudosComponent;
  let fixture: ComponentFixture<InfoedudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoedudosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoedudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
