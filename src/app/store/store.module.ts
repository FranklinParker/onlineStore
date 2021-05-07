import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreComponent} from './store.component';
import {ModelModule} from '../../model/model.module';
import {CartSummaryComponent} from '../cart-summary/cart-summary.component';



@NgModule({
  declarations: [
    StoreComponent,
    CartSummaryComponent
  ],
  exports: [
    StoreComponent,
    CartSummaryComponent
  ],
  imports: [
    CommonModule,
    ModelModule
  ]
})
export class StoreModule { }
