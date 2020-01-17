import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InsideLayoutComponent } from './layout';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'shop',
    component: InsideLayoutComponent,
    // canActivate: [AuthGuardService],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./product-management/product-management.module').then(m => m.ProductManagementModule)
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
