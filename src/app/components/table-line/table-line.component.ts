import { Component, Input, OnInit } from '@angular/core';
import { SupService } from 'src/app/services/sup service/sup.service';
import { Router } from '@angular/router';

@Component({
  selector: '[app-table-line]',
  templateUrl: './table-line.component.html',
  styleUrls: ['./table-line.component.css']
})
export class TableLineComponent {


  @Input() ref : string ;
  @Input() produitName : string ;
  @Input() categorie : string ;
  @Input() price : string ;



  // @Input() details : string ;
  constructor(private produits :SupService , private router : Router )
  {


  }

  ngOnInit(): void {
  }
  

  OnDetails(){

this.router.navigate(['produits/ref'])

  }

}
