import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get('products.json');
  }
}
