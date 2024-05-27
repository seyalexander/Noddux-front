import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthDatosComponent } from './auth-datos.component';

describe('AuthDatosComponent', () => {
  let component: AuthDatosComponent;
  let fixture: ComponentFixture<AuthDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
