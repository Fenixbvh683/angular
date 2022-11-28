import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModigruredesComponent } from './modigruredes.component';

describe('ModigruredesComponent', () => {
  let component: ModigruredesComponent;
  let fixture: ComponentFixture<ModigruredesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModigruredesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModigruredesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
