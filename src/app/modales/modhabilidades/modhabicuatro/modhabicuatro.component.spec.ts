import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModhabicuatroComponent } from './modhabicuatro.component';

describe('ModhabicuatroComponent', () => {
  let component: ModhabicuatroComponent;
  let fixture: ComponentFixture<ModhabicuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModhabicuatroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModhabicuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
