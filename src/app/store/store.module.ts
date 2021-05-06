import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreComponent} from './store.component';
import {ModelModule} from '../../model/model.module';



@NgModule({
  declarations: [
    StoreComponent,
  ],
  exports: [
    StoreComponent
  ],
  imports: [
    CommonModule,
    ModelModule
  ]
})
export class StoreModule { }
