import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoItemsVenderComponent } from './listado-items-vender.component';

describe('ListadoItemsVenderComponent', () => {
  let component: ListadoItemsVenderComponent;
  let fixture: ComponentFixture<ListadoItemsVenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoItemsVenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoItemsVenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
