import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './product-management.model';
import { AppConfig } from '../app.config';


@Injectable({
    providedIn: 'root'
})

export class ProductManagementService {
    data: Product[] = [];
    public cartItems = [];
    public products = new BehaviorSubject<Product[]>([]);
    public totalitem = new BehaviorSubject<number>(0);

    constructor(
        private http: HttpClient
    ) { }

    getAllProducts() {
        return this.http.get(AppConfig.GetCars);
    }

    addProductToCart(product) {
        this.cartItems.push(product);
        this.products.next(this.cartItems);
        this.setTotalItemsInCart();
    }

    getAllProcuctForCart(): Observable<Product[]> {
        return this.products.asObservable();
    }

    setTotalItemsInCart() {
        const count = this.cartItems.length;
        this.totalitem.next(count);
    }

    getTotalItemsInCart(): Observable<number> {
        return this.totalitem.asObservable();
    }

    removeProductFromCart(productId) {
        this.cartItems.map((item, index) => {
            if (item.id === productId) {
                this.cartItems.splice(index, 1);
            }
        });
        this.products.next(this.cartItems);
        this.setTotalItemsInCart();
    }

    getProductDetailsById(productId) {
        this.data = this.getAllProducts();
        const product = this.data.find(p => p.id === productId);
        return product;
    }

}
