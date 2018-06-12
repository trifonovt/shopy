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
    { id: 1, name: 'Jack', age: 23},
    { id: 1, name: 'Jack', age: 23},
  ];
  constructor(private productStore: FakeStore, private productService: ProductService) {
    // this.productService.getProducts().subscribe((products) => {
    //   this.products = products.json();
    //   debugger
    // });
  }

  ngOnInit() {

  }

}
