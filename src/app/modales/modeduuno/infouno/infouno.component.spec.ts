import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfounoComponent } from './infouno.component';

describe('InfounoComponent', () => {
  let component: InfounoComponent;
  let fixture: ComponentFixture<InfounoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfounoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfounoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
