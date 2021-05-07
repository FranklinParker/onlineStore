import {Injectable} from '@angular/core';
import {CartLine} from './cartLine';
import {ProductModel} from '../../model/product.model';

@Injectable()
export class CartModel{
  private cartLines: CartLine[] = [];
  updateCartLine(product: ProductModel, quantity: number ): void {
    const cartLine =  this.cartLines
      .find((item) => item.product.id === product.id);
    if (cartLine){
      cartLine.quantity = quantity;
    } else {
      this.cartLines.push(new CartLine(product, quantity));
    }
  }
}
