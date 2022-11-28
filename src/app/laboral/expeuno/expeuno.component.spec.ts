import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeunoComponent } from './expeuno.component';

describe('ExpeunoComponent', () => {
  let component: ExpeunoComponent;
  let fixture: ComponentFixture<ExpeunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpeunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpeunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
