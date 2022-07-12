import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardYSoftskillsComponent } from './hard-y-softskills.component';

describe('HarySoftskillsComponent', () => {
  let component: HardYSoftskillsComponent;
  let fixture: ComponentFixture<HardYSoftskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardYSoftskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardYSoftskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
