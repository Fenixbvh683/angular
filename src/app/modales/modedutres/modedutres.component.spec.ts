import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModedutresComponent } from './modedutres.component';

describe('ModedutresComponent', () => {
  let component: ModedutresComponent;
  let fixture: ComponentFixture<ModedutresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModedutresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModedutresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
