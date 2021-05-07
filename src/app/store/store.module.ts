import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreComponent} from './store.component';
import {ModelModule} from '../../model/model.module';
import {CartSummaryComponent} from '../cart-summary/cart-summary.component';
import {CartDetailsComponent} from '../cart-details/cart-details.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    StoreComponent,
    CartSummaryComponent,
    CartDetailsComponent
  ],
  exports: [
    StoreComponent,
    CartDetailsComponent
  ],
  imports: [
    CommonModule,
    ModelModule,
    RouterModule
  ]
})
export class StoreModule { }
