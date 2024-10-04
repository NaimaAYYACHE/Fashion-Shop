import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitByCategorieComponent } from './produit-by-categorie.component';

describe('ProduitByCategorieComponent', () => {
  let component: ProduitByCategorieComponent;
  let fixture: ComponentFixture<ProduitByCategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduitByCategorieComponent]
    });
    fixture = TestBed.createComponent(ProduitByCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
