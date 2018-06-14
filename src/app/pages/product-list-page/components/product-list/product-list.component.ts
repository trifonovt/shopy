import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductService } from '../../../../services/products/product.service';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  sortOptions: SelectItem[];
  sortField?: string;
  sortOrder?: number;
  products: Array<object> = [
    { id: 1, title: 'BMW I880', description: 'super car with 1200hp', price: 23, category: 'Super Cars'},
    { id: 2, title: 'BMW I880', description: 'super car with 1200hp', price: 56, category: 'Super Cars'},
    { id: 3, title: 'BMW I880', description: 'super car with 1200hp', price: 46, category: 'Super Cars'},
    { id: 4, title: 'BMW I880', description: 'super car with 1200hp', price: 23, category: 'Super Cars'},
    { id: 5, title: 'BMW I880', description: 'super car with 1200hp', price: 56, category: 'Super Cars'},
    { id: 6, title: 'BMW I880', description: 'super car with 1200hp', price: 46, category: 'Super Cars'},
    { id: 7, title: 'BMW I880', description: 'super car with 1200hp', price: 23, category: 'Super Cars'},
    { id: 8, title: 'BMW I880', description: 'super car with 1200hp', price: 56, category: 'Super Cars'},
    { id: 9, title: 'BMW I880', description: 'super car with 1200hp', price: 46, category: 'Super Cars'},
    { id: 10, title: 'BMW I880', description: 'super car with 1200hp', price: 23, category: 'Super Cars'},
    { id: 11, title: 'BMW I880', description: 'super car with 1200hp', price: 56, category: 'Super Cars'},
    { id: 12, title: 'BMW I880', description: 'super car with 1200hp', price: 46, category: 'Super Cars'},
  ];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.sortOptions = [
      {label: 'Cheapest', value: 'price'},
      {label: 'Expensive', value: '!price'}
    ];
    // this.productService.getProducts().subscribe((products) => {
    //   this.products = products;
    //   console.log(products);
    // });
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
