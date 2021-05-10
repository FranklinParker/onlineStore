import {Component, OnInit} from '@angular/core';
import {OrderModel} from '../../../models/Order.model';
import {OrderRepository} from '../../../../model/order.repository';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  submitted = false;
  orderSent = false;

  constructor(public order: OrderModel,
              public orderRepository: OrderRepository) {
  }

  ngOnInit(): void {
  }


  save(form: NgForm): any {
    if(form.valid){
      this.submitted = true;
      this.orderRepository.saveOrder(this.order)
        .subscribe(() => {
          this.order.clear();
          this.submitted = false;
          this.orderSent = true;
          },
          err => alert('Error saving order: ' + err.message)
        );

    }
  }
}
