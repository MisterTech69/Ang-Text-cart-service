import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 productList = [
   {name: 'Das laptop', price: 8799},
   {name: 'Iphone14', price: 999},
   {name: 'Airpods', price: 99},
   {name: 'Ur mom', price: 999999},
   {name: 'House', price: 1550000000000}

  ];
 cartProductList = [];

 addProductToCart(product) {
   const productExistInCart = this.cartProductList.find(({name}) => name === product.name); // find product by name
   if (!productExistInCart) {
     this.cartProductList.push({...product, num:1}); // enhance "porduct" opject with "num" property
     return;
   }
   productExistInCart.num += 1;
 }
  removeProduct(product) {
   this.cartProductList = this.cartProductList.filter(({name}) => name !== product.name)
  }
}
