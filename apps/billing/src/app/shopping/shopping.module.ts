import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { CartComponent } from './cart/cart.component';
import { CartTableComponent } from './cart-table/cart-table.component';
import { SummaryComponent } from './summary/summary.component';
import { ModalItemListComponent } from './modal-item-list/modal-item-list.component';


@NgModule({
  declarations: [CartComponent, CartTableComponent, SummaryComponent, ModalItemListComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
