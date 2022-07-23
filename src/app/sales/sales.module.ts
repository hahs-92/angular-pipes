import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrdersComponent } from './pages/orders/orders.component';

@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    OrdersComponent,
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    OrdersComponent,
  ],
})
export class SalesModule {}
