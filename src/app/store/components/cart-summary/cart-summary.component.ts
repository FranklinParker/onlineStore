import { Component, OnInit } from '@angular/core';
import {CartModel} from '../../../models/cart.model';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {

  constructor(public cart: CartModel) { }

  ngOnInit(): void {
  }

}
