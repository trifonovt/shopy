import { Component, Input } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  sortOptions: SelectItem[];
  sortField?: string;
  sortOrder?: number;
  @Input()
  products: Array<object> = [];

  constructor() {
    this.sortOptions = [
      {label: 'Cheapest', value: 'price'},
      {label: 'Expensive', value: '!price'}
    ];
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    } else {
        this.sortOrder = 1;
        this.sortField = value;
    }
  }

}
