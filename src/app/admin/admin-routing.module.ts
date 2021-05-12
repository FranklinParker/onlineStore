import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './components/admin/admin.component';
import {AuthComponent} from './components/auth/auth.component';
import {AuthGuard} from './guard/auth.guard';
import {ProductListComponent} from './components/product-list/product-list.component';
import {OrderListComponent} from './components/order-list/order-list.component';
import {ProductEditComponent} from './components/product-edit/product-edit.component';

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
        path: 'products/:mode/:id',
        component: ProductEditComponent,
      },
      {
        path: 'products/:mode',
        component: ProductEditComponent,
      },
      {
        path: 'products',
        component: ProductListComponent,
      },
      {
        path: 'orders',
        component: OrderListComponent,
      },
      {
        path: '**',
        redirectTo: 'products'
      }
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: '**',
    redirectTo: 'auth',
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
