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
  post(product: IProduct): Observable<IProduct> {
    // Remove the service dependency from the object
    delete product.service;
    return this.http.post(appApiResources.products, product)
    .map((res: IProduct) => {
      return res;
    })
    .catch((error: Response) => Observable.throw(error))
    .finally(() => {
    });
  }

  get() {
    return this.http.get(appApiResources.products)
    .map((res: IProduct) => {
      debugger
      return res;
    })
    .catch((error: Response) => Observable.throw(error))
    .finally(() => {
      debugger
    });
  }
}
