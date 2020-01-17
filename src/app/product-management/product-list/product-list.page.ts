import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product-management.model';
import { Subscription } from 'rxjs';
import { ProductManagementService } from '../Product-management.service';
import { ProductManagementModule } from '../product-management.module';
import { HeaderTitleService } from 'src/app/shared/services/header-title.service';
import { Title } from 'src/app/shared/constants/title.constant';
import { IonInfiniteScroll, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  totalItem: number;
  productList: Product[] = [];
  subscription: Subscription = new Subscription();

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  length: 15;

  constructor(
    private productService: ProductManagementService,
    private headerTitleService: HeaderTitleService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.getAllProduct();
    this.headerTitleService.setHeaderTitle(Title.cars);
  }

  getAllProduct() {
    this.subscription.add(this.productService.getAllProducts().subscribe((res: Product[]) => {
      if (res.length) {
        this.productList = res;
      }
    }));
  }

  addToCart(product) {
    this.productService.addProductToCart(product);
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      for (let i = 0; i < 10; i++) {
        this.productList.push();
      }
      event.target.complete();

      if (this.productList.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
