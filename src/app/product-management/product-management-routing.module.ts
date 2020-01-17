import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductListPage, CartPage } from '.';
import { ProductDetailsPage } from './product-details/product-details.page';
import { AddEditProductPage } from './add-edit-product/add-edit-product.page';

const productmanagementRoutes: Routes = [
    {
        path: '',
        component: ProductListPage,
    },
    {
        path: 'list',
        component: ProductListPage
    },
    {
        path: 'cart',
        component: CartPage
    },
    {
        path: 'details/:id',
        component: ProductDetailsPage
    },
    {
        path: 'add',
        component: AddEditProductPage
    }

];

@NgModule({
    imports: [RouterModule.forChild(productmanagementRoutes)],
    exports: [RouterModule]
})
export class ProductManagementRoutesRoutingModule { }
