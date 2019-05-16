import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TreeNode } from 'primeng/api';




export interface Element {
  Id: number;
  Username: string;
  EmailID: string;
  location: string;
  user_type: string;
  badge: string;
  PhoneNumber: string;
  Permissions: string;
  Status: boolean;

}

const data: Element[] = [
  { Id: 1, Username: 'Oliver', EmailID: 'Oliver@gmail.com', PhoneNumber: '989-999-9999',location:'India',user_type:"Photographer",badge:"Gold", Permissions: '2/5', Status: true },
  { Id: 2, Username: 'Harry', EmailID: 'Harry@gmail.com', PhoneNumber: '989-999-9999', location:'US',user_type:"Boutique Owner",badge:"Bronze",Permissions: '4/5', Status: true },
  { Id: 3, Username: 'Cooper', EmailID: 'Cooper@gmail.com', PhoneNumber: '989-999-9999', location:'UK',user_type:"Fashion Designer",badge:"Silver",Permissions: '3/5', Status: true },
];


@Injectable({
  providedIn: 'root'
})


export class AdminsettingsService {

  constructor(private http: HttpClient) { }
  //Tree Data of all
  getData() {
    return data;
  }

  getDataId(Id) {
    data[Id]['Status'] != data[Id]['Status'];
    return data;
  }


  public getJSON(): Observable<any> {
    return this.http.get("../../../assets/setuptree.json")
  }


  public getstructureJSON(): Observable<any> {
    return this.http.get("../../../assets/structure.json")
  }

  public getmarketingJSON(): Observable<any> {
    return this.http.get("../../../assets/marketing.json")
  }

  public gettechnologyJSON(): Observable<any> {
    return this.http.get("../../../assets/technology.json")
  }

  public getsoltionsJSON(): Observable<any> {
    return this.http.get("../../../assets/solutions.json")
  }

  public getprogressJSON(): Observable<any> {
    return this.http.get("../../../assets/progress.json")
  }


  public getinnovationJSON(): Observable<any> {
    return this.http.get("../../../assets/innovation.json")
  }

  
  public gettalentJSON(): Observable<any> {
    return this.http.get("../../../assets/talent.json")
  }
 
  public getcultureJSON(): Observable<any> {
    return this.http.get("../../../assets/culture.json")
  }

  public getindustriesJSON(): Observable<any> {
    return this.http.get("../../../assets/industries.json")
  }

  public getalignmentJSON(): Observable<any> {
    return this.http.get("../../../assets/alignment.json")
  }

  public getriskJSON(): Observable<any> {
    return this.http.get("../../../assets/risk.json")
  }

  public getinfrastructureJSON(): Observable<any> {
    return this.http.get("../../../assets/infrastructure.json")
  }

  
  public getfinanceJSON(): Observable<any> {
    return this.http.get("../../../assets/finance.json")
  }

  public getstatutoryJSON(): Observable<any> {
    return this.http.get("../../../assets/statutory.json")
  }

  public getprojectsJSON(): Observable<any> {
    return this.http.get("../../../assets/projects.json")
  }

  public getqualityJSON(): Observable<any> {
    return this.http.get("../../../assets/quality.json")
  }


  getstructure() {
    return this.http.get('../../../assets/structure.json')
      .toPromise()
      .then(res => <TreeNode[]>res);
  }

  getFiles() {
    return this.http.get('../../../assets/setuptree.json')
      .toPromise()
      .then(res => <TreeNode[]>res);
  }

  getMarketing() {
    return this.http.get('../../../assets/marketing.json')
      .toPromise()
      .then(res => <TreeNode[]>res);
  }

  getTechnology() {
    return this.http.get('../../../assets/technology.json')
      .toPromise()
      .then(res => <TreeNode[]>res);
  }

  getSolutions() {
    return this.http.get('../../../assets/solutions.json')
      .toPromise()
      .then(res => <TreeNode[]>res);
  }

  getProgress() {
    return this.http.get('../../../assets/progress.json')
      .toPromise()
      .then(res => <TreeNode[]>res);
  }

  getInnovation() {
    return this.http.get('../../../assets/innovation.json')
      .toPromise()
      .then(res => <TreeNode[]>res);
  }

  getTalent(){
    return this.http.get('../../../assets/talent.json')
    .toPromise()
    .then(res=> <TreeNode[]>res);
  }

  getCulture(){
    return this.http.get('../../../assets/culture.json')
    .toPromise()
    .then(res=> <TreeNode[]>res);
  }

  getIndustries(){
    return this.http.get('../../../assets/industries.json')
    .toPromise()
    .then(res=> <TreeNode[]>res);
  }

  getalignment(){
    return this.http.get('../../../assets/alignment.json')
    .toPromise()
    .then(res=> <TreeNode[]>res);
  }

  getrisk(){
    return this.http.get('../../../assets/risk.json')
    .toPromise()
    .then(res=> <TreeNode[]>res);
  }

  getinfrastructure(){
    return this.http.get('../../../assets/infrastructure.json')
    .toPromise()
    .then(res=> <TreeNode[]>res);
  }

  getfinance(){
    return this.http.get('../../../assets/finance.json')
    .toPromise()
    .then(res=> <TreeNode[]>res);
  }

  getstatutory(){
    return this.http.get('../../../assets/statutory.json')
    .toPromise()
    .then(res=> <TreeNode[]>res);
  }
  getprojects(){
    return this.http.get('../../../assets/projects.json')
    .toPromise()
    .then(res=> <TreeNode[]>res);
  }
  getquality(){
    return this.http.get('../../../assets/projects.json')
    .toPromise()
    .then(res=> <TreeNode[]>res);
  }


}
