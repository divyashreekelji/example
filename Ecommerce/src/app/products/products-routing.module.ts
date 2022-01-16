import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';



const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
