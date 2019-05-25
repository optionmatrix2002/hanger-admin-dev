import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  loginurl = "/login";
  forgetpassurl = "/forgotpassword";
  resetpassurl = '/resetpassword';
  checksessionurl = '/checksession';
  logouturl = "/logout";
  createpasswordurl = '/activateuser';
  checkresetpassurl = '/checkresetpassurlstatus';

  headers = new Headers({
    'Content-Type': 'application/json'
  });
  constructor(private http: Http) { }
  
  loginCheck(uname, pswd): Promise<any> {
    var data = {
      email: uname,
      password: pswd
    }
    return this.http.post(this.loginurl, JSON.stringify(data), { headers: this.headers, withCredentials: true }).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  logOut(): Promise<any> {
    return this.http.post(this.logouturl, { headers: this.headers}).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }
  
  forgetPassword(email): Promise<any> {
    var data = {
      email: email
    }
    return this.http.post(this.forgetpassurl, JSON.stringify(data), { headers: this.headers }).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  resetPassword(pswd, uid, resetToken): Promise<any> {
    var data = {
      userId: uid,
      password: pswd,
      accessToken: resetToken
    }
    return this.http.post(this.resetpassurl, JSON.stringify(data), { headers: this.headers }).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  checkSessionAlive(token) {
    let headers2 = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get(this.checksessionurl, { headers: headers2, withCredentials: true }).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  activateUser(uid, accToken): Promise<any> {
    var data = {
      userId: uid,
      accessToken: accToken
    }
    return this.http.post(this.createpasswordurl, JSON.stringify(data), { headers: this.headers }).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  urlResetPasswordCheck(uid, accessToken, tS): Promise<any> {
    var data = {
      userId: uid,
      accessToken: accessToken,
      timeStamp: tS
    }
    return this.http.post(this.checkresetpassurl, JSON.stringify(data), { headers: this.headers }).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleErrorPromise(error: Response | any) {
   
    return Promise.reject(error.message || error);
  }

}
