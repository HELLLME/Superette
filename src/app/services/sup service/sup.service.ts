import { Injectable } from '@angular/core';
import { productName } from '../../models/productName.model';

@Injectable({
  providedIn: 'root'
})
export class SupService {


  sups : Array<productName>;
  constructor() { }


  getSups(){ 

    this.sups = [];

    const products = ['buscuit saida'	,'lait natilait','javel judy 2 L',];
    const categories = ['produit alimentaire','produit alimentaire','produit de netoillage'];
    const prices = [1000,1400,2500];

for (let i = 0; i < products.length; i++) {
 
  this.sups.push(new productName(products[i],categories[i],prices[i]))
}
return this.sups ;
}

 
   
getElementByRef(ref: number) {
  const product = this.sups.find(
    (s) => {
      return s.ref === ref;
    }
  );
  return product;
}
addProduit( newproduit : productName){

  this.sups.push(newproduit); 


}
}
