import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx'

@Injectable({
  providedIn: 'root'
})

export class PagesService {
  public headers: any;
  getlookupsurl = "http://localhost:6500/getlookups";
  addlookupsurl='http://localhost:6500/addlookups';
  loginurl = 'http://localhost:6500/login';
  checksessionurl = 'http://localhost:6500/checksession';
  logouturl = 'http://localhost:6500/logout';
  getlookupoptionsurl = 'http://localhost:6500/getlookupoptions';
  updatelookupurl = 'http://localhost:6500/updatelookup';

  getToken() {
    if (localStorage.getItem('login_user_info')) {
      let currentUser = JSON.parse(localStorage.getItem('login_user_info'));
      return currentUser.auth_token;
    } else {
      return " ";
    }
  }

  getLookups(filter) : Promise<any> {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.getToken(),
    });
    return this.http.post(this.getlookupsurl, JSON.stringify(filter), {headers:this.headers, withCredentials:true}).toPromise()
    .then(this.extractData)
    .catch(this.handleErrorPromise);
  }

  addLookups(filter) : Promise<any> {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.getToken(),
    });
    return this.http.post(this.addlookupsurl, JSON.stringify(filter), {headers:this.headers, withCredentials:true}).toPromise()
    .then(this.extractData)
    .catch(this.handleErrorPromise);
  }

  getLookupOptions(filter) : Promise <any> {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.getToken()
    });
    return this.http.post(this.getlookupoptionsurl, JSON.stringify(filter),{headers:this.headers, withCredentials: true}).toPromise()
    .then(this.extractData)
    .catch(this.handleErrorPromise);
  }

  updateLookup(item) : Promise<any> {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.getToken()
    });
    return this.http.put(this.updatelookupurl, JSON.stringify(item), {headers:this.headers, withCredentials:true}).toPromise()
    .then(this.extractData)
    .catch(this.handleErrorPromise);
  }

  loginCheck(uname, pswd): Promise<any> {
    this.headers = new Headers({
      'Content-Type': 'application/json',
    });
    var data = {
      email: uname,
      password: pswd
    }
    return this.http.post(this.loginurl, JSON.stringify(data), { headers: this.headers, withCredentials: true }).toPromise()
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

  logOut(): Promise<any> {
    return this.http.post(this.logouturl, { headers: this.headers}).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  private extractData(res :Response) { 
    let body = res.json();
    return body || {};
  }

  private handleErrorPromise(error : Response | any) {
    return Promise.reject(error.message ||error );
  }

  constructor(private http:Http) { }
}
