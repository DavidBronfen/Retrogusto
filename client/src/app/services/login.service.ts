import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ILogin, ILoginToken } from '../models/login';

import { environment } from '../../environments/environment';

@Injectable()
export class LoginService {

  constructor(
    private http: HttpClient,
  ) { }

  loginUser(loginInfo: ILogin): String {
    // return this.http.post<ILoginToken>(`${environment.backend}/auth/signin`, loginInfo)
    //   .map(token => {
    //     localStorage.setItem('retroUserToken', token.token)
    //   });
    return '';
  }

}
