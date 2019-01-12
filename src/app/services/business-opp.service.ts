import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIGS } from '../config';

@Injectable({
  providedIn: 'root'
})
export class BusinessOppService {

  constructor(private http:HttpClient) { }

  add(businessData){
    
    const url = CONFIGS.apiBaseURL+CONFIGS.apiURLs.business_opp["add"];
    return this.http.post(url, businessData);

  }

  get(){

      const url = CONFIGS["apiBaseURL"]+CONFIGS["apiURLs"]["business_opp"]["list"];
      return this.http.get(url);

  }

  delete(id){
    
    const url =CONFIGS["apiBaseURL"]+CONFIGS["apiURLs"]["bus"]["delete"]+"/"+id; 
    return this.http.delete(url);

  }

}
