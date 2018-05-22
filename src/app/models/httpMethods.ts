
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

const api = 'http://10.128.47.69:3000/api/v1/products';

export class HttpMethods {
  private headers: HttpHeaders;
  public http: HttpClient
  constructor(headers: HttpHeaders, http: HttpClient) {
    headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  get(data) {
    const req = new HttpRequest('GET', api, { headers: this.headers });
    this.http.request(req).subscribe((data) => {

    });
  }

  post(data) {
    const req = new HttpRequest('POST', api, data, { headers: this.headers });
    this.http.request(req).subscribe((data) => {

    });
  }

  put(data) {
    const req = new HttpRequest('POST', api, data, { headers: this.headers });
    this.http.request(req).subscribe((data) => {

    });
  }
}
