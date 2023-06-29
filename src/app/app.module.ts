import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list.component';
import { ShoppingCartComponent } from './shopping-cart.component';
import {ProductComponent}  from './product.component';
import {CartProductComponent} from './cart-product.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ProductListComponent, ShoppingCartComponent, ProductComponent, CartProductComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
