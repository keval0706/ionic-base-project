import { Component, OnInit } from '@angular/core';
import { Product } from '../product-management.model';
import { Subscription } from 'rxjs';
import { ProductManagementService } from '../Product-management.service';
import { HeaderTitleService } from 'src/app/shared/services/header-title.service';
import { Title } from 'src/app/shared/constants/title.constant';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  productList: Product[] = [];
  subscription: Subscription = new Subscription();

  constructor(
    private productService: ProductManagementService,
    private headerTitleService: HeaderTitleService
  ) { }

  ngOnInit() {
    this.getAllProductForCart();
    this.headerTitleService.setHeaderTitle(Title.cart);
  }

  getAllProductForCart() {
    this.subscription.add(this.productService.getAllProcuctForCart().subscribe((res: Product[]) => {
      this.productList = res;
    }));
  }

  removeFromCart(productId) {
    this.productService.removeProductFromCart(productId);
  }

}
