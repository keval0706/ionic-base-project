import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SharedService } from 'src/app/shared';
import { Router } from '@angular/router';
import { ProductManagementService } from 'src/app/product-management/Product-management.service';
import { HeaderTitleService } from 'src/app/shared/services/header-title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  userName: string;
  totalItem: number;
  title: string;

  constructor(
    private menu: MenuController,
    private sharedService: SharedService,
    private router: Router,
    private productService: ProductManagementService,
    private headerTitleService: HeaderTitleService
  ) { }

  ngOnInit() {
    this.userName = this.sharedService.getUserName();
    this.getTotal();
    this.getTitle();
  }

  openFirst() {
    this.menu.enable(true, 'my-content');
    this.menu.open('my-content');
  }

  gotoProduct() {
    this.router.navigateByUrl('/shop/products');
    this.menu.close('my-content');
  }

  gotoHome() {
    this.router.navigateByUrl('/shop/home');
    this.menu.close('my-content');
  }

  getTotal() {
    this.productService.getTotalItemsInCart().subscribe((res: number) => {
      this.totalItem = res;
    });
  }

  gotoCart() {
    this.router.navigateByUrl('/shop/products/cart');
    this.menu.close('first');
  }

  getTitle() {
    this.headerTitleService.getHeaderTitle().subscribe((res: string) => {
      this.title = res;
    });
  }

  logout() {
    this.sharedService.logout();
  }

}
