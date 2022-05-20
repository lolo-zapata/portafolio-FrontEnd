import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgFComponent } from './img-f.component';

describe('ImgFComponent', () => {
  let component: ImgFComponent;
  let fixture: ComponentFixture<ImgFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
