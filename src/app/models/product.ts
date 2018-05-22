import { ProductService } from '../services/product.service';
import { AppModule } from '../app.module';

interface IProduct {
  id: number;
  category: string;
  title: string;
  description: string;
  price: number;
  imgUrl: string;
  save();
  delete();
  update();
  get();
}

export class Product implements IProduct {
  service: ProductService;
  constructor(public id: number,
              public title: string,
              public category: string,
              public description: string,
              public price: number,
              public imgUrl: string) {
                this.service = AppModule.injector.get(ProductService);
              }
  get() {
     return this.service.get();
  }
  save() {
    return this.service.post(this);
  }
  update() {

  }
  delete() {

  }
}
