import { Component } from '@angular/core';
import { SupService } from 'src/app/services/sup service/sup.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-produit',
  templateUrl: './single-produit.component.html',
  styleUrls: ['./single-produit.component.css']
})
export class SingleProduitComponent {
  product: any;


  constructor(private supsService: SupService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const ref = this.route.snapshot.params['id']

    this.product = this.supsService.getElementByRef(ref);
  }

}
