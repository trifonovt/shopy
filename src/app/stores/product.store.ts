import { Injectable } from '@angular/core';
import { observable, autorun, action, computed, runInAction } from 'mobx';
import { ProductService } from '../services/products/product.service';

const contains = (o, t) => o.toLowerCase().indexOf(t) > -1;

@Injectable()
export class Product {
    @observable text: string = '';
    @observable products: Object[] = [];
    @observable count = 1;
    @observable price = 100000;

    constructor(private productService: ProductService) {

    }

    @action addProduct = product => this.products.push(product);
    @action setQueryString = text => this.text = text;
    @action setPriceFilter = price => this.price = price;
    @action fetchProducts = () => {
      this.productService.getProducts()
        .subscribe(products => {
            runInAction(() => {
                this.products = products;
            });
        })
    }

    @computed get filteredProducts() {
        return this.products.filter((p: any) =>
            (contains(p.title, this.text) ||
            contains(p.description, this.text) ||
            contains(p.category, this.text)) && p.price <= this.price);
    }


}
