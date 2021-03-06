import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() public product: {};
  constructor() { }

  ngOnInit() {
  }

  private add(product): void {
    localStorage.setItem('currentProduct', JSON.stringify(product));
  }
}
