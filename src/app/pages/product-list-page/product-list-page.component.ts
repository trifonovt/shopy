import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Product as FakeStore } from '../../stores/product.store';
import { ProductService } from '../../services/products/product.service';

@Component({
  selector: 'app-product-list-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {
  private products = [
    { id: 1, name: 'Jack', age: 23},
    { id: 2, name: 'Jack', age: 56},
    { id: 3, name: 'Jack', age: 46},
    { id: 4, name: 'Jack', age: 23},
    { id: 5, name: 'Jack', age: 56},
    { id: 6, name: 'Jack', age: 46},
    { id: 7, name: 'Jack', age: 23},
    { id: 8, name: 'Jack', age: 56},
    { id: 9, name: 'Jack', age: 46},
    { id: 10, name: 'Jack', age: 23},
    { id: 11, name: 'Jack', age: 56},
    { id: 12, name: 'Jack', age: 46},
  ];
  constructor(private productStore: FakeStore, private productService: ProductService) {
  }

  ngOnInit() {
    // this.productService.getProducts().subscribe((products) => {
    //   this.products = products;
    //   console.log(products);

    //   debugger
    // });

  }

}
