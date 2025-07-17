import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';

@Injectable({ providedIn: 'root' })
export class SupService {
  private sups: Product[] = [];

  constructor() {
    // Only initialize demo products ONCE
    if (this.sups.length === 0) {
      const products = ['buscuit saida', 'lait natilait', 'javel judy 2 L'];
      const categories = ['produit alimentaire', 'produit alimentaire', 'produit de netoillage'];
      const prices = [1000, 1400, 2500];

      for (let i = 0; i < products.length; i++) {
        this.sups.push(new Product(products[i], categories[i], prices[i]));
      }
    }
  }

  getSups() {
    return this.sups;
  }

  getElementByRef(ref: number) {
    return this.sups.find(s => s.ref === ref);
  }

  addProduit(newProduit: Product) {
    this.sups.push(newProduit);
  }
}
