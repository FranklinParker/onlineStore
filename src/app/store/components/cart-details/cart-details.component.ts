import { Component, OnInit } from '@angular/core';
import {CartModel} from '../../../models/cart.model';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {

  constructor(public cartModel: CartModel) { }

  ngOnInit(): void {
  }

  quantityChange(event: any): void{
    if (event.target.value < 1){
      event.target.value = 1;
    }
  }

}
