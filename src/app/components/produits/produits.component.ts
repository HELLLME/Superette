import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth service/auth.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SupService } from 'src/app/services/sup service/sup.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})


export class ProduitsComponent {
  products: any[] = [];
@ViewChild(MatPaginator) paginator: MatPaginator;
 dataSource: MatTableDataSource<any>;

onClickNewProduct() {
this.router.navigate(['/new-produit'])
}

constructor(private router : Router ,private authService : AuthService, private supService: SupService ){


}
  OnDetails(){

    this.router.navigate(['produits/id'])
    
      }
    

      ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
      }
}
