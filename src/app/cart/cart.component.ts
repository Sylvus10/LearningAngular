import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  // Used when a "submit" event calling this method is triggered on a form.
  // Triggers the ngSubmit emitter to emit the "submit" event as its payload. Emit is a weird word choice, but whatever.
  // More info here: https://angular.io/api/forms/NgForm#onsubmit
  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value); // This is the 'emitted' temp function. Just outputs the submmited values to the console.
    // This sets the values in the checkoutForm back to default.
    this.checkoutForm.reset();
  }

  ngOnInit(): void {}
}
