import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
//import {ProductsModule} from './products/products.module';
import { MaterialModule} from './material-module';
import { ProductsDataService } from './products/products-data.service';

import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //ProductsModule
    
    HttpClientModule,
    MaterialModule,
    MatCardModule
  ],
  providers: [ProductsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
