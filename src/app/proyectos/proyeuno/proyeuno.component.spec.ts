import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyeunoComponent } from './proyeuno.component';

describe('ProyeunoComponent', () => {
  let component: ProyeunoComponent;
  let fixture: ComponentFixture<ProyeunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyeunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyeunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
