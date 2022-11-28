import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModhabiunoComponent } from './modhabiuno.component';

describe('ModhabiunoComponent', () => {
  let component: ModhabiunoComponent;
  let fixture: ComponentFixture<ModhabiunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModhabiunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModhabiunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
