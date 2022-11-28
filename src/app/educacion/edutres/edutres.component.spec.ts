import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdutresComponent } from './edutres.component';

describe('EdutresComponent', () => {
  let component: EdutresComponent;
  let fixture: ComponentFixture<EdutresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdutresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdutresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
