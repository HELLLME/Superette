import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
// import { AppComponent } from './app.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { ProduitsComponent } from './components/produits/produits.component';
// import { AuthGuardService } from './services/guard.service';
import { SingleProduitComponent } from './components/single-produit/single-produit.component';
import { AddNewProduitComponent } from './components/add-new-produit/add-new-produit.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { TestGithubViewComponent } from './views/test-github-view/test-github-view.component';
import { AvailableProductsComponent } from './views/available-products/available-products.component';
import { AuthViewCustomerComponent } from './views/auth-view-customer/auth-view-customer.component';


const routes: Routes = [
  
{path: '' ,component: LandingPageComponent},
  { path: 'landing-page', component: LandingPageComponent },
  {path: 'auth' , component: AuthViewComponent},
  {path: 'auth-view-customer', component: AuthViewCustomerComponent },
  {path: 'produits' , component: ProduitsComponent},
  {path: 'produits/:ref' ,component: SingleProduitComponent},
  {path: 'new-produit' ,component: AddNewProduitComponent},
  { path: 'test-github', component: TestGithubViewComponent },
  { path: 'available-products', component: AvailableProductsComponent },
   
  {path: 'not-found' , component: ErrorViewComponent},
  {path: '**' , redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
