export class Product {
  private static nextRef = 0;

  id: number;
  produitName: string;
  categorie: string;
  price: number;

  constructor(produitName: string, categorie: string, price: number) {
    this.id = Product.nextRef++;
    this.produitName = produitName;
    this.categorie = categorie;
    this.price = price;
  }
}