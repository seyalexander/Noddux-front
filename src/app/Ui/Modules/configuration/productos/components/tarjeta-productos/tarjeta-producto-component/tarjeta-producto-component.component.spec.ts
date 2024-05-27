import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaProductoComponentComponent } from './tarjeta-producto-component.component';

describe('TarjetaProductoComponentComponent', () => {
  let component: TarjetaProductoComponentComponent;
  let fixture: ComponentFixture<TarjetaProductoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaProductoComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarjetaProductoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
