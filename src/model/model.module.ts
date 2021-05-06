import {NgModule} from '@angular/core';
import {ProductRepository} from './product.repository';
import {StaticDataSource} from './staticDataSource';

@NgModule({
  providers: [ProductRepository, StaticDataSource]
})
export class ModelModule{
}

