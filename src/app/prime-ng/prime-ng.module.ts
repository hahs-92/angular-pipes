import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
//primeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';

//este modulo necesita BrowserAnimationsModule
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  exports: [ButtonModule, CardModule, MenubarModule, FieldsetModule],
})
export class PrimeNgModule {}
