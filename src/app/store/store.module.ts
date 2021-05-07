import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {StoreComponent} from './components/store-home/store.component';
import {ModelModule} from '../../model/model.module';
import {CartSummaryComponent} from './components/cart-summary/cart-summary.component';
import {CartDetailsComponent} from './components/cart-details/cart-details.component';
import {CheckoutComponent} from './components/checkout/checkout.component';



@NgModule({
  declarations: [
    StoreComponent,
    CartSummaryComponent,
    CartDetailsComponent,
    CheckoutComponent
  ],
  exports: [
    StoreComponent,
    CartDetailsComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    ModelModule,
    RouterModule
  ]
})
export class StoreModule { }
