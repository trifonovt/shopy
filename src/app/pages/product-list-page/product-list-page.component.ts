import { Component } from '@angular/core';
import { Product } from '../../stores/product.store';
@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent {

  constructor(private productStore: Product) {
  }

  public onPriceSliderEnd(value): void {
    this.productStore.setPriceFilter(value);
  }

}
