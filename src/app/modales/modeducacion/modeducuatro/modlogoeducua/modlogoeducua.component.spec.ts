import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModlogoeducuaComponent } from './modlogoeducua.component';

describe('ModlogoeducuaComponent', () => {
  let component: ModlogoeducuaComponent;
  let fixture: ComponentFixture<ModlogoeducuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModlogoeducuaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModlogoeducuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
