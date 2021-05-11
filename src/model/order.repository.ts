import {Injectable} from '@angular/core';
import {OrderModel} from '../app/models/Order.model';
import {StaticDataSource} from './staticDataSource';
import {Observable} from 'rxjs';
import {ProductModel} from './product.model';
import {RestDatasource} from './rest.datasource';

@Injectable()

export class OrderRepository{
 orders: OrderModel[] = [];
 loaded = false;
 constructor(private dataSource: RestDatasource) {
   this.loadOrders();
 }

 private loadOrders(): void{
   this.loaded = true;
   this.dataSource.getOrders()
     .subscribe(orders => this.orders = orders);
 }
 getOrders(): OrderModel[]{
   return this.orders;
 }


  saveOrder(order: OrderModel): any{
    if (order.id && order.id !== 0){
      this.dataSource.updateOrder(order)
        .subscribe((o) => this.orders.push(o));
    } else {
      this.dataSource.saveOrder(order)
        .subscribe(o =>
          this.orders.splice(this.orders.findIndex(pi => pi.id === order.id), 1, o));
    }
  }

  deleteOrder(id: number): void{
    this.dataSource.deleteOrder(id).subscribe(() =>
      this.orders.splice(this.orders.findIndex(pi => pi.id === id), 1 ));
  }
}
