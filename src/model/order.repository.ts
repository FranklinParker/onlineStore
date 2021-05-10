import {Injectable} from '@angular/core';
import {OrderModel} from '../app/models/Order.model';
import {StaticDataSource} from './staticDataSource';
import {Observable} from 'rxjs';

@Injectable()

export class OrderRepository{
 orders: OrderModel[] = [];
 constructor(private staticDataSource: StaticDataSource) {
 }

 getOrders(): OrderModel[]{
   return this.orders;
 }
 saveOrder(order: OrderModel): Observable<OrderModel>{
   return this.staticDataSource.saveOrder(order);
 }
}
