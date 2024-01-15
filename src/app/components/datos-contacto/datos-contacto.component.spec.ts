import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosContactoComponent } from './datos-contacto.component';

describe('DatosContactoComponent', () => {
  let component: DatosContactoComponent;
  let fixture: ComponentFixture<DatosContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosContactoComponent]
    });
    fixture = TestBed.createComponent(DatosContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
