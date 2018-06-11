import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


import { appApiResources } from '../../app.constants';
import { ILoginResponse } from './ilogin-response-interface';
import { HelperService } from '../http/helper.service';
import { BaseService } from '../http/base.service';

@Injectable()
export class LoginService {
  constructor(public http: BaseService, public helperService: HelperService) {
  }
  login(postBody: any): Observable<ILoginResponse> {
    return this.http.post(appApiResources.login, postBody)
      .map((res: ILoginResponse) => {
        this.processLoginResponse(res);
        return res;
      })
      .catch((error: Response) => Observable.throw(error))
      .finally(() => {
      });
  }
  processLoginResponse(res: ILoginResponse) {
    console.log(res);
  }
}
