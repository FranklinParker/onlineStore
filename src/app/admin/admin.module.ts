import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import {ModelModule} from '../../model/model.module';
import {AuthGuard} from './guard/auth.guard';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { OrderListComponent } from './components/order-list/order-list.component';


@NgModule({
  declarations: [
    AuthComponent,
    AdminComponent,
    ProductListComponent,
    ProductEditComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModelModule
  ],
  providers: [ AuthGuard]
})
export class AdminModule { }
