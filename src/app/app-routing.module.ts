import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StoreComponent} from './store/store.component';
import {CartDetailsComponent} from './cart-details/cart-details.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {StoreGuard} from './store/store.guard';

const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
    canActivate: [StoreGuard]

  },
  {
    path: 'cart',
    component: CartDetailsComponent,
    canActivate: [StoreGuard]
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [StoreGuard]
  },
  {
    path: '**',
    component: StoreComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
