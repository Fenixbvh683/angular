import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModhabicincoComponent } from './modhabicinco.component';

describe('ModhabicincoComponent', () => {
  let component: ModhabicincoComponent;
  let fixture: ComponentFixture<ModhabicincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModhabicincoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModhabicincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
