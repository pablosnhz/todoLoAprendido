import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaLoginComponent } from './pagina-login.component';

describe('PaginaLoginComponent', () => {
  let component: PaginaLoginComponent;
  let fixture: ComponentFixture<PaginaLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaLoginComponent]
    });
    fixture = TestBed.createComponent(PaginaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
