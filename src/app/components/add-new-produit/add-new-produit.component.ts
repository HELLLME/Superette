import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { productName } from 'src/app/models/productName.model';
import { SupService } from 'src/app/services/sup service/sup.service';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-add-new-produit',
  templateUrl: './add-new-produit.component.html',
  styleUrls: ['./add-new-produit.component.css']
})
export class AddNewProduitComponent implements OnInit {


  newProduit: FormGroup;
  product : productName;

  categories: string[] = [
    'Fruits',
    'Vegetables',
    'Dairy',
    'Bread and baked goods',
    'Meat and fish',
    'Meat alternatives',
    'Cans and jars',
    'Pasta, rice, and cereals',
    'Sauces and condiments',
    'Herbs and spices',
    'Frozen foods',
    'Snacks',
    'Drinks',
    'Household and cleaning',
    'Personal care',
    'Pet care',
    'Baby products'
  ];


constructor( private fb : FormBuilder,private supService:SupService , private router : Router) {

  this.newProduit = this.fb.group({
    // ref: ['', Validators.required],
    produitName: ['', Validators.required],
    categorie: ['', Validators.required],
    price: ['', Validators.required]
  });
}
  ngOnInit() : void  {

    this.product= new productName('','',1200);

    
  }

  onSubmitNewProduct( form : FormGroup){

    console.log(this.newProduit);

const product = new productName(
  form.value.produitName,
  form.value.categorie,
  form.value.price

)
    this.supService.addProduit(product);
    this.router.navigate(['/produits'])

    console.log(this.product);
  }
}
