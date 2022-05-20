import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectsSectionComponent } from './proyects-section.component';

describe('ProyectsSectionComponent', () => {
  let component: ProyectsSectionComponent;
  let fixture: ComponentFixture<ProyectsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
