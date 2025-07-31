import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SupService {
  private sups: Product[] = [];
  
  constructor(private http: HttpClient) {
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

  getSups(): Observable<any> {
    const headers = {
      'X-RapidAPI-Key': '3592821a44msh1f37b1fecda871ap1fe6fejsn04f88bf856fa',
      'X-RapidAPI-Host': 'grocery-api2.p.rapidapi.com'
    };
    
    // Add query parameters
    const params = {
      query: 'vegetable',
      country: 'us',
      page: '1'
    };
    
    return this.http.get('https://grocery-api2.p.rapidapi.com/amazon', { 
      headers,
      params 
    });
  }

  getElementByRef(ref: number) {
    return this.sups.find(s => s.ref === ref);
  }

  addProduit(newProduit: Product) {
    this.sups.push(newProduit);
  }
}
