import { Injectable } from '@angular/core';
import { Http, HttpModule,Headers,RequestOptions } from "@angular/http";
import { Observable } from 'rxjs';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  basicUrl = "http://10.75.9.158:8080/";
  constructor(private http: Http) { }
  getHeader() {
    return  new RequestOptions({ headers: new Headers({
        'Access-Control-Allow-Origin': '*'
      }) });
  }
  login(data): Observable<any[]> {
    return this.http.post(this.basicUrl + "guest/login", data, this.getHeader()).pipe(map((response: any) => response.json()));
  }
  getGuest(guestId): Observable<any> {
    return this.http.get(this.basicUrl + "/guest/get/" + guestId, this.getHeader()).pipe(map((response: any) => response.json()));
  }
  getViewData(guestId) {
    return this.http.get(this.basicUrl + "/guest/view/" + guestId, this.getHeader()).pipe(map((response: any) => response.json()));
  }
  save(data) {
    return this.http.post(this.basicUrl + "guest/register", data, this.getHeader()).pipe(map((response: any) => response.json()));
  }
   bookResort(data,id) {
    return this.http.post(this.basicUrl + "resort/register/"+id, data, this.getHeader()).pipe(map((response: any) => response.json()));
  }
   bookDining(data,id) {
    return this.http.post(this.basicUrl + "dining/register/"+id, data, this.getHeader()).pipe(map((response: any) => response.json()));
  }
  getResortData(id) {
    return this.http.get(this.basicUrl + "resort/get/" + id, this.getHeader()).pipe(map((response: any) => response.json()));
  }
  getDiningData(id) {
    return this.http.get(this.basicUrl + "dining/get/" + id, this.getHeader()).pipe(map((response: any) => response.json()));
  }
  cancelDining(id) {
    return this.http.get(this.basicUrl + "dining/cancel/" + id, this.getHeader()).pipe(map((response: any) => response.json()));
  }
  cancelresort(id) {
    return this.http.get(this.basicUrl + "dining/cancel/" + id, this.getHeader()).pipe(map((response: any) => response.json()));
  }
}
