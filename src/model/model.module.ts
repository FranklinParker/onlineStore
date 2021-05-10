import {NgModule} from '@angular/core';
import {ProductRepository} from './product.repository';
import {StaticDataSource} from './staticDataSource';
import {CartModel} from '../app/models/cart.model';
import {OrderModel} from '../app/models/Order.model';
import {OrderRepository} from './order.repository';

@NgModule({
  providers: [ProductRepository, StaticDataSource, CartModel, OrderModel, OrderRepository]
})
export class ModelModule{
}

