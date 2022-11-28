import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModfotjlComponent } from './modfotjl.component';

describe('ModfotjlComponent', () => {
  let component: ModfotjlComponent;
  let fixture: ComponentFixture<ModfotjlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModfotjlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModfotjlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
