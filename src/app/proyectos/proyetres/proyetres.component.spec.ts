import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyetresComponent } from './proyetres.component';

describe('ProyetresComponent', () => {
  let component: ProyetresComponent;
  let fixture: ComponentFixture<ProyetresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyetresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyetresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
