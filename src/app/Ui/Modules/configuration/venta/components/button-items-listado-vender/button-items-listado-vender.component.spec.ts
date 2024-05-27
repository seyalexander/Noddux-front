import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonItemsListadoVenderComponent } from './button-items-listado-vender.component';

describe('ButtonItemsListadoVenderComponent', () => {
  let component: ButtonItemsListadoVenderComponent;
  let fixture: ComponentFixture<ButtonItemsListadoVenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonItemsListadoVenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonItemsListadoVenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
