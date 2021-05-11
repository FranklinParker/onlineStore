import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import {ModelModule} from '../../model/model.module';
import {AuthGuard} from './guard/auth.guard';


@NgModule({
  declarations: [
    AuthComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModelModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AdminModule { }
