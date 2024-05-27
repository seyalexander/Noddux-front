import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePrincipalPagesComponent } from './home-principal-pages.component';

describe('HomePrincipalPagesComponent', () => {
  let component: HomePrincipalPagesComponent;
  let fixture: ComponentFixture<HomePrincipalPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePrincipalPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePrincipalPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
