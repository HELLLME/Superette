import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { TableLineComponent } from './components/table-line/table-line.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { AuthService } from './services/auth service/auth.service';
import { AuthGuardService } from './services/guard service/auth-guard.service';
import { SupService } from './services/sup service/sup.service';
import { SingleProduitComponent } from './components/single-produit/single-produit.component';
import { AddNewProduitComponent } from './components/add-new-produit/add-new-produit.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { AdsSliderComponent } from './components/ads-slider/ads-slider.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TestGithubViewComponent } from './views/test-github-view/test-github-view.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthViewCustomerComponent } from './views/auth-view-customer/auth-view-customer.component';
import { AvailableProductsComponent } from './views/available-products/available-products.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableLineComponent,
    HeaderComponent,

    ErrorViewComponent,
    ProduitsComponent,
    SingleProduitComponent,
    AddNewProduitComponent,
    AuthViewComponent,
    FooterComponent,
    LandingPageComponent,  
    AdsSliderComponent,
    TestGithubViewComponent,
    AuthViewCustomerComponent,
    AvailableProductsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [
    SupService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
