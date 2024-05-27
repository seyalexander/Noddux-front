import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartadoVentaComponent } from './apartado-venta.component';

describe('ApartadoVentaComponent', () => {
  let component: ApartadoVentaComponent;
  let fixture: ComponentFixture<ApartadoVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApartadoVentaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApartadoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
