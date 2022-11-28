import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdudosComponent } from './edudos.component';

describe('EdudosComponent', () => {
  let component: EdudosComponent;
  let fixture: ComponentFixture<EdudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdudosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
