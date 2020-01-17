import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductListPage, CartPage, AddEditProductPage, ProductDetailsPage } from '.';
import { ProductManagementRoutesRoutingModule } from './product-management-routing.module';


@NgModule({
  declarations: [
    ProductListPage,
    CartPage,
    ProductDetailsPage,
    AddEditProductPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductManagementRoutesRoutingModule
  ]
})
export class ProductManagementModule { }
