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
export class LookupService {

  constructor(private http:Http) { }

  public headers: any;
  getlookupurl = '/getlookups';
  addlookupurl = '/addlookups';

  getToken() {
    if (localStorage.getItem('sg_user_info')) {
      let currentUser = JSON.parse(localStorage.getItem('sg_user_info'));
      return currentUser.token;
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
    return this.http.post(this.getlookupurl, JSON.stringify(filter), {headers:this.headers, withCredentials: true}).toPromise()
    .then(this.extractData)
    .catch(this.handleErrorPromise);
  }

  addLookup(filter) : Promise<any> {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.getToken(),
    });
    return this.http.post(this.addlookupurl, JSON.stringify(filter), {headers:this.headers, withCredentials: true}).toPromise()
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
  
}
