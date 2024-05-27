import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecladoLetrasComponent } from './teclado-letras.component';

describe('TecladoLetrasComponent', () => {
  let component: TecladoLetrasComponent;
  let fixture: ComponentFixture<TecladoLetrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecladoLetrasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TecladoLetrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
