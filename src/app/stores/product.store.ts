import { Injectable } from '@angular/core';
import { observable, autorun, action, computed } from 'mobx';

const contains = (o, t) => o.toLowerCase().indexOf(t) > -1;

@Injectable()
export class Product {
    @observable text: string = '';
    @observable products: Object[] = [{
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
    }, {
        "title": "Code monkey",
        "description": "Writes the code for you.",
        "price": 1233,
        "category": "automation",
        "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/2015_Mercedes-Benz_C_200_%28W_205%29_sedan_%282015-07-03%29_01.jpg/1200px-2015_Mercedes-Benz_C_200_%28W_205%29_sedan_%282015-07-03%29_01.jpg"
    }];
    @observable count = 1;

    @action addProduct = product => this.products.push(product);
    @action setQueryString = text => this.text = text;

    @computed get filteredProducts() {
        return this.products.filter((p: any) => contains(p.title, this.text) ||
            contains(p.description, this.text) ||
            contains(p.category, this.text));
    }

    constructor() {
       
    }
}
