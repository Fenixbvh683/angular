import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeduunoComponent } from './modeduuno.component';

describe('ModeduunoComponent', () => {
  let component: ModeduunoComponent;
  let fixture: ComponentFixture<ModeduunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeduunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeduunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
