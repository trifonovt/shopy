import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {
  public products: Object[] = [{
    "title": "Snowboard",
    "description": "In a really good condition.",
    "price": 110,
    "category": "sport",
    "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/61jRhAr-aGL._SL1000_.jpg"
}, {
    "title": "Mercedes C200",
    "description": "163 horsepower, really well maintained",
    "price": 5000,
    "category": "motor",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/2015_Mercedes-Benz_C_200_%28W_205%29_sedan_%282015-07-03%29_01.jpg/1200px-2015_Mercedes-Benz_C_200_%28W_205%29_sedan_%282015-07-03%29_01.jpg"
}, {
    "title": "Elephant Puzzle",
    "description": "All pieces are included.",
    "price": 20,
    "category": "toys",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0977/1572/products/Number_Ele.jpg?v=1463348724"
}];
  constructor() { }

  ngOnInit() {
  }

}
