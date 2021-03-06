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
  getlookupsurl = "/getlookups";
  addlookupsurl='/addlookups';
  getlookupoptionsurl = '/getlookupoptions';
  updatelookupurl = '/updatelookup';
  getbadgesurl = '/getbadges';
  updatebadgesurl = '/updatebadge';
  getallusersurl = '/getallusers';
  updateuserstatusurl = '/updateuserstatus';
  updateuserprofileurl = '/updateuserprofile';

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

  getBadges(filter) : Promise <any> {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.getToken()
    });
    return this.http.post(this.getbadgesurl, JSON.stringify(filter),{headers:this.headers, withCredentials: true}).toPromise()
    .then(this.extractData)
    .catch(this.handleErrorPromise);
  }

  updateBadge(filter) : Promise <any> {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.getToken()
    });
    return this.http.put(this.updatebadgesurl, JSON.stringify(filter),{headers:this.headers, withCredentials: true}).toPromise()
    .then(this.extractData)
    .catch(this.handleErrorPromise);
  }

  updateUserStatus(filter) : Promise <any> {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.getToken()
    });
    return this.http.put(this.updateuserstatusurl, JSON.stringify(filter),{headers:this.headers, withCredentials: true}).toPromise()
    .then(this.extractData)
    .catch(this.handleErrorPromise);
  }

  updateUserProfile(filter) : Promise <any> {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.getToken()
    });
    return this.http.put(this.updateuserprofileurl, JSON.stringify(filter),{headers:this.headers, withCredentials: true}).toPromise()
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

  getAllUsers(filter) : Promise<any> {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.getToken(),
    });
    return this.http.post(this.getallusersurl, JSON.stringify(filter), {headers:this.headers, withCredentials:true}).toPromise()
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
