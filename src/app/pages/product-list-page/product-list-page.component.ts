import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../stores/product.store';

@Component({
  selector: 'app-product-list-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {
  constructor(private productStore: Product) {

  }

  ngOnInit() {
    this.productStore.fetchProducts();
  }

}
