import { ProductService } from "../services/products/product.service";

export interface IProduct {
  id?: number;
  category?: string;
  title?: string;
  description?: string;
  price?: number;
  imgUrl?: string;
  save();
  // delete();
  // update();
  // get();
  service?: ProductService;
}
