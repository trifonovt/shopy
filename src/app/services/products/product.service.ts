import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { BaseService } from '../http/base.service';
import { HelperService } from '../http/helper.service';
import { Observable } from 'rxjs/Rx';
import { appApiResources } from '../../app.constants';
import { IProduct } from '../../models/Iproduct';

@Injectable()
export class ProductService {

  constructor(public http: BaseService, public helperService: HelperService) {

  }

  getProduct(id: number) {
    return this.http.get(`${appApiResources.products}/${id}`)
    .map((res: IProduct) => {
      return res;
    })
    .catch((error: Response) => Observable.throw(error))
    .finally(() => {
    });
  }

  getProducts() {
    return this.http.get(appApiResources.products)
    .map((res: IProduct) => {
      return res;
    })
    .catch((error: Response) => Observable.throw(error))
    .finally(() => {
    });
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http.post(appApiResources.products, product)
    .map((res: IProduct) => {
      return res;
    })
    .catch((error: Response) => Observable.throw(error))
    .finally(() => {
    });
  }

  update(id, data) {
    return this.http.put(`${appApiResources.products}/${id}`, data)
    .map((res: IProduct) => {
      return res;
    })
    .catch((error: Response) => Observable.throw(error))
    .finally(() => {
    });
  }

  delete(id, data) {
    return this.http.delete(`${appApiResources.products}/${id}`, data)
    .map((res: IProduct) => {
      return res;
    })
    .catch((error: Response) => Observable.throw(error))
    .finally(() => {
    });
  }
}
