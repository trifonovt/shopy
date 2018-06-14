import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/products/product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  private products: Array<object> = [
    { id: 1, title: 'Jack', price: 23},
    { id: 2, title: 'Jack', price: 56},
    { id: 3, title: 'Jack', price: 46},
    { id: 4, title: 'Jack', price: 23},
    { id: 5, title: 'Jack', price: 56},
    { id: 6, title: 'Jack', price: 46},
    { id: 7, title: 'Jack', price: 23},
    { id: 8, title: 'Jack', price: 56},
    { id: 9, title: 'Jack', price: 46},
    { id: 10, title: 'Jack', price: 23},
    { id: 11, title: 'Jack', price: 56},
    { id: 12, title: 'Jack', price: 46},
  ];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    // this.productService.getProducts().subscribe((products) => {
    //   this.products = products;
    //   console.log(products);
    // });
  }

}
