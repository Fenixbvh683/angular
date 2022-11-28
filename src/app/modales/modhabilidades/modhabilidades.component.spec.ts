import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModhabilidadesComponent } from './modhabilidades.component';

describe('ModhabilidadesComponent', () => {
  let component: ModhabilidadesComponent;
  let fixture: ComponentFixture<ModhabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModhabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModhabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
