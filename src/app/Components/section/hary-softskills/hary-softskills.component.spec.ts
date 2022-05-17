import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarySoftskillsComponent } from './hary-softskills.component';

describe('HarySoftskillsComponent', () => {
  let component: HarySoftskillsComponent;
  let fixture: ComponentFixture<HarySoftskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarySoftskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HarySoftskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
