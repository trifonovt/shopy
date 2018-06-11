import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Product as FakeStore } from '../../stores/product.store';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {
  constructor(private productStore: FakeStore) {

  }

  ngOnInit() {
    debugger
    const product = new Product(10, 'Audi', 'Cars', 'Nice car', 5000, '');
    product.get();
    product.save();

  }

}
