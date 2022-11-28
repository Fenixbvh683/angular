import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuinfotresComponent } from './moduinfotres.component';

describe('ModuinfotresComponent', () => {
  let component: ModuinfotresComponent;
  let fixture: ComponentFixture<ModuinfotresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuinfotresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuinfotresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
