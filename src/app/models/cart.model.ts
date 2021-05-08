import {Injectable} from '@angular/core';
import {CartLine} from './cartLine';
import {ProductModel} from '../../model/product.model';

@Injectable()
export class CartModel{
  private cartLines: CartLine[] = [];
  private itemCount = 0;
  private totalItemPrice = 0;
  addToCart(product: ProductModel, quantity: number = 1 ): void {
    const cartLine =  this.cartLines
      .find((item) => item.product.id === product.id);
    if (cartLine){
      cartLine.quantity += quantity;
    } else {
      this.cartLines.push(new CartLine(product, quantity));
    }
    this.reCalc();
  }

  updateQuantity(product: ProductModel, quantity: number): void {
    const cartLine = this.cartLines
      .find((item) => item.product.id === product.id);
    if ( cartLine){
      cartLine.quantity = Number(quantity);
    }
    this.reCalc();
  }
  remove(product: ProductModel): void{
    const idx = this.cartLines.findIndex(item => item.product.id === product.id);
    if (idx !== -1){
      this.cartLines.splice(idx, 1);
    }
  }

  clear(): void{
    this.cartLines = [];
    this.itemCount = 0;
    this.totalItemPrice = 0;
  }

  private reCalc(): void{
    this.itemCount = 0;
    this.totalItemPrice = 0;
    this.cartLines.forEach((line) => {
      this.itemCount += line.quantity;
      this.totalItemPrice += line.lineTotal;
    });
  }

  get TotalItems(): number{
    return this.itemCount;
  }

  get TotalAmount(): number {
    return this.totalItemPrice;
  }

  get cartItems(): CartLine[]{
    return this.cartLines;
  }
}
