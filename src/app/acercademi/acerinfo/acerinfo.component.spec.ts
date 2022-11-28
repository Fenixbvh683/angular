import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcerinfoComponent } from './acerinfo.component';

describe('AcerinfoComponent', () => {
  let component: AcerinfoComponent;
  let fixture: ComponentFixture<AcerinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcerinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
