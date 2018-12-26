import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIGS } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addProduct(productData){

    return this.http.post(CONFIGS["apiBaseURL"]+CONFIGS["apiURLs"]["product"]["add"], productData);
  
  }

  getProducts(){

    return this.http.get(CONFIGS["apiBaseURL"]+CONFIGS["apiURLs"]["product"]["list"]);
    
  }

  updateFeatures(product_id, features){

    const url= CONFIGS["apiBaseURL"]+CONFIGS["apiURLs"]["product"]["features"]+"/"+product_id;
    return this.http.post(url, features);
  }


  updateSpecs(product_id, specifications){

    const url= CONFIGS["apiBaseURL"]+CONFIGS["apiURLs"]["product"]["specifications"]+"/"+product_id;
    return this.http.post(url, specifications);
  }

  updateGallery(product_id, gallery_data){

    const url= CONFIGS["apiBaseURL"]+CONFIGS["apiURLs"]["product"]["gallery"]+"/"+product_id;
    return this.http.post(url, gallery_data);
  }

  updateBrochure(product_id, brochure_data){

    const url= CONFIGS["apiBaseURL"]+CONFIGS["apiURLs"]["product"]["brochure"]+"/"+product_id;
    return this.http.post(url, brochure_data);

  }

  updateVideo(product_id, video_data){

    const url= CONFIGS["apiBaseURL"]+CONFIGS["apiURLs"]["product"]["video"]+"/"+product_id;
    return this.http.post(url, video_data);

  }

}
