import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SupService } from 'src/app/services/sup service/sup.service';
import { productName } from 'src/app/models/productName.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['ref', 'produitName', 'categorie', 'price', 'details'];
  dataSource: MatTableDataSource<any>;
  sups: Array<any>;
  @Input() products: any[] = []; // <-- Add products to parent
  constructor(  private router : Router , private supService: SupService) {

  }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource(this.products);


  }

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['products']) {
        this.dataSource = new MatTableDataSource(this.products);
        if (this.paginator) this.dataSource.paginator = this.paginator;
        if (this.sort) this.dataSource.sort = this.sort;
      }
    }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  viewDetails(element: any): void {
    console.log('Details:', element);
  }
  onClickNewProduct() {
    this.router.navigate(['/new-produit'])
  }


}
