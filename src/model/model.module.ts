import {NgModule} from '@angular/core';
import {ProductRepository} from './product.repository';
import {StaticDataSource} from './staticDataSource';
import {CartModel} from '../app/models/cart.model';

@NgModule({
  providers: [ProductRepository, StaticDataSource, CartModel]
})
export class ModelModule{
}

