import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductosPagesComponent } from './lista-productos-pages.component';

describe('ListaProductosPagesComponent', () => {
  let component: ListaProductosPagesComponent;
  let fixture: ComponentFixture<ListaProductosPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaProductosPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaProductosPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
