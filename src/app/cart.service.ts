import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  // Takes the passed in product and adds it to the list of items in the cart.
  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }
  // Used to get the data from shipping.json via HTTP requests.
  // See https://angular.io/api/common/http/HttpClient for more info.
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
