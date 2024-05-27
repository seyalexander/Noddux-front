import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalItemsVenderComponent } from './total-items-vender.component';

describe('TotalItemsVenderComponent', () => {
  let component: TotalItemsVenderComponent;
  let fixture: ComponentFixture<TotalItemsVenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalItemsVenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalItemsVenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
