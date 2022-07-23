import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//routes
import { AppRouterModule } from './app-router.module';
//modules
// import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { SalesModule } from './sales/sales.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouterModule, SharedModule, SalesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
