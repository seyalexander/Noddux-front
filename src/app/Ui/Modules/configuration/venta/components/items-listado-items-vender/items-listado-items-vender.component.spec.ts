import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsListadoItemsVenderComponent } from './items-listado-items-vender.component';

describe('ItemsListadoItemsVenderComponent', () => {
  let component: ItemsListadoItemsVenderComponent;
  let fixture: ComponentFixture<ItemsListadoItemsVenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsListadoItemsVenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemsListadoItemsVenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
