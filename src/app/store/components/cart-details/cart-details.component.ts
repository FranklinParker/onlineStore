import { Component, OnInit } from '@angular/core';
import {CartModel} from '../../../models/cart.model';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {

  constructor(private cartModel: CartModel) { }

  ngOnInit(): void {
  }

}
