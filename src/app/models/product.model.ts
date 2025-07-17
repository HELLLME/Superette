export class Product {
  private static nextRef = 0;

  ref: number;
  produitName: string;
  categorie: string;
  price: number;

  constructor(produitName: string, categorie: string, price: number) {
    this.ref = Product.nextRef++;
    this.produitName = produitName;
    this.categorie = categorie;
    this.price = price;
  }
}