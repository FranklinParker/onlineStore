import {Injectable} from '@angular/core';
import {ProductModel} from './product.model';
import {from, Observable} from 'rxjs';

@Injectable()

export class StaticDataSource{
  private products: ProductModel[] = [
    new ProductModel(1,  'Gloves', 'Winter',  'Heavy gloves', 12.50),
    new ProductModel(2,  'Hat', 'Winter',  'Red Hat', 15.50),
    new ProductModel(3,  'Socks', 'Summer',  'Nice socks', 12.50),


  ];

  getProducts(): Observable<ProductModel[]>{
   return from([this.products]);
  }
}
