import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTecladoVirtualComponent } from './button-teclado-virtual.component';

describe('ButtonTecladoVirtualComponent', () => {
  let component: ButtonTecladoVirtualComponent;
  let fixture: ComponentFixture<ButtonTecladoVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonTecladoVirtualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonTecladoVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
