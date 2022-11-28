import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeduinfocuaComponent } from './modeduinfocua.component';

describe('ModeduinfocuaComponent', () => {
  let component: ModeduinfocuaComponent;
  let fixture: ComponentFixture<ModeduinfocuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeduinfocuaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeduinfocuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
