import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth service/auth.service';
import { SupService } from 'src/app/services/sup service/sup.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  products: any[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private supService: SupService
  ) {}

  ngOnInit(): void {
    this.supService.getSups().subscribe(
      (response) => {
        console.log('API Response:', response);
        // Extract only the products array from the response
        const apiProducts = response.products || [];
        
        // Map API fields to table expected fields
        this.products = apiProducts.map((product: any) => ({
          ref: product.id || Math.random(), // Use id if available, otherwise random
          produitName: product.name, // Map 'name' to 'produitName'
          categorie: product.category || 'N/A', // Use category if available
          price: product.price || 0 // Use price if available
        }));
        
        console.log('Mapped products:', this.products);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  onClickNewProduct() {
    this.router.navigate(['/new-produit'])
  }

  OnDetails() {
    this.router.navigate(['produits/id'])
  }

  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
  }
}
