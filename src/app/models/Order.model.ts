import {Injectable} from '@angular/core';
import {CartModel} from './cart.model';


@Injectable()

export class OrderModel{
  id: number | undefined;
  name: string | undefined;
  address: string | undefined;
  city: string| undefined;
  state: string|undefined;
  zip: string | undefined;
  country: string| undefined;
  shipped = false;

  constructor(public cart: CartModel) {
  }
  clear(): void{
    this.shipped = false;
    this.address = this.zip = this.city = this.state = undefined;
    this.country = this.name = this.id = undefined;
    this.cart.clear();

  }


}
