import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewProduitComponent } from './add-new-produit.component';

describe('AddNewProduitComponent', () => {
  let component: AddNewProduitComponent;
  let fixture: ComponentFixture<AddNewProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewProduitComponent]
    });
    fixture = TestBed.createComponent(AddNewProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
