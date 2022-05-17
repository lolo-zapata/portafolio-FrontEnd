import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgSComponent } from './img-s.component';

describe('ImgSComponent', () => {
  let component: ImgSComponent;
  let fixture: ComponentFixture<ImgSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
