import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPComponent } from './img-p.component';

describe('ImgPComponent', () => {
  let component: ImgPComponent;
  let fixture: ComponentFixture<ImgPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
