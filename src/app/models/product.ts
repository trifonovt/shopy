import { ProductService } from '../services/products/product.service';
import { AppModule } from '../app.module';
import { IProduct } from './Iproduct';


export class Product implements IProduct {
  service: ProductService;
  constructor(public id?: number,
              public title?: string,
              public category?: string,
              public description?: string,
              public price?: number,
              public imgUrl?: string) {
                this.service = AppModule.injector.get(ProductService);
              }
  get() {
     return this.service.get();
  }
  save() {
    return this.service.post(this);
  }
  // update() {

  // }
  delete() {

  }
}
