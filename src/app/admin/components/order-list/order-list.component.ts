import { Component, OnInit } from '@angular/core';
import {OrderRepository} from '../../../../model/order.repository';
import {OrderModel} from '../../../models/Order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  includeShipped = false;
  constructor(private orderRepository: OrderRepository) { }

  ngOnInit(): void {
  }

  getOrders(): OrderModel[]{
    return this.orderRepository.getOrders()
      .filter(o => this.includeShipped || !o.shipped);
  }

  delete(id: number): void{
    this.orderRepository.deleteOrder(id);
  }

  markedAsShipped(order: OrderModel): void{
    order.shipped = true;
    this.orderRepository.saveOrder(order);
  }


}
