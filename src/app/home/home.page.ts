import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HeaderTitleService } from '../shared/services/header-title.service';
import { Title } from '../shared/constants/title.constant';
import { Product } from '../product-management/product-management.model';
import { Subscription } from 'rxjs';
import { ProductManagementService } from '../product-management/Product-management.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 100,
    pager: true,
    autoplay: {
      delay: 5000,
    },
  };

  productList: Product[] = [];
  subscription: Subscription = new Subscription();

  constructor(
    private menu: MenuController,
    private headerTitleService: HeaderTitleService,
    private productService: ProductManagementService,
  ) { }

  ngOnInit() {
    this.headerTitleService.setHeaderTitle(Title.home);
    this.getAllProduct();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  getAllProduct() {
    this.subscription.add(this.productService.getAllProducts().subscribe((res: Product[]) => {
      this.productList = res;
    }));
  }

}
