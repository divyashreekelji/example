import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsDataService } from '../products-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products?:Observable<any>;
  constructor(private productsDataService:ProductsDataService) { }
 

  ngOnInit(): void {
    this.products=this.productsDataService.getAllProducts();
  }

}
