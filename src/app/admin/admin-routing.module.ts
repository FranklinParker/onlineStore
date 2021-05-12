import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './components/admin/admin.component';
import {AuthComponent} from './components/auth/auth.component';
import {AuthGuard} from './guard/auth.guard';
import {ProductListComponent} from './components/product-list/product-list.component';
import {OrderListComponent} from './components/order-list/order-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'products',
        component: ProductListComponent,
      },
      {
        path: 'orders',
        component: OrderListComponent,
      }
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
