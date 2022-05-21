import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresoBarrasComponent } from './progreso-barras.component';

describe('ProgresoBarrasComponent', () => {
  let component: ProgresoBarrasComponent;
  let fixture: ComponentFixture<ProgresoBarrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgresoBarrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgresoBarrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
