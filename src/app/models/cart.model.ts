import {Injectable} from '@angular/core';
import {CartLine} from './cartLine';
import {ProductModel} from '../../model/product.model';

@Injectable()
export class CartModel{
  private cartLines: CartLine[] = [];
  addToCart(product: ProductModel, quantity: number = 1 ): void {
    const cartLine =  this.cartLines
      .find((item) => item.product.id === product.id);
    if (cartLine){
      cartLine.quantity += quantity;
    } else {
      this.cartLines.push(new CartLine(product, quantity));
    }
  }

  updateQuantity(product: ProductModel, quantity: number): void {
    const cartLine = this.cartLines
      .find((item) => item.product.id === product.id);
    if ( cartLine){
      cartLine.quantity = Number(quantity);
    }
  }
  remove(product: ProductModel): void{
    const idx = this.cartLines.findIndex(item => item.product.id === product.id);
    if (idx !== -1){
      this.cartLines.splice(idx, 1);
    }
  }

  clear(): void{
    this.cartLines = [];
  }
}
