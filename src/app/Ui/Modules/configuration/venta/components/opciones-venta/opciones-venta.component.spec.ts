import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesVentaComponent } from './opciones-venta.component';

describe('OpcionesVentaComponent', () => {
  let component: OpcionesVentaComponent;
  let fixture: ComponentFixture<OpcionesVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcionesVentaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpcionesVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
