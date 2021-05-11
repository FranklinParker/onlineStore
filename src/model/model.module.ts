import {NgModule} from '@angular/core';
import {ProductRepository} from './product.repository';
import {StaticDataSource} from './staticDataSource';
import {CartModel} from '../app/models/cart.model';
import {OrderModel} from '../app/models/Order.model';
import {OrderRepository} from './order.repository';
import {HttpClientModule} from '@angular/common/http';
import {RestDatasource} from './rest.datasource';
import {AuthService} from './auth.service';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    ProductRepository,
    StaticDataSource,
    CartModel,
    OrderModel,
    OrderRepository,
    RestDatasource,
    AuthService
  ]
})
export class ModelModule {
}

