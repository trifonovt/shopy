import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent {

  constructor() {
  }

  public onPriceSliderEnd(value): void {
    this.productStore.setPriceFilter(value);
  }

}
