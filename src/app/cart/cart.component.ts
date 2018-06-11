import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  currentProduct: string;
  constructor() { }

  ngOnInit() {
      this.currentProduct = JSON.parse(localStorage.getItem('currentProduct')) || 'The cart is Empty';
  }

}
