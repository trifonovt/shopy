import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

const api = 'http://10.128.47.69:3000/api/v1/products';
@Injectable()
export class ProductService {

  constructor(public http: HttpClient) { }

  // This get method maybe will be available when we have backend ready for taking one product by id or smth...
  get() {
    return this.http.get(api);
  }
  post(product) {
    delete product['service'];
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    const req = new HttpRequest('POST', api, product, { headers: headers });
    this.http.request(req).subscribe((data) => {

    });
  }
  put() {

  }
  delete() {

  }

  customRequest(type: string, headers) {

  }
}
