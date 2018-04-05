import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopyHeaderComponent } from './shopy-header/shopy-header.component';
import { AppButtonComponent } from './app-button/app-button.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ShopyHeaderComponent,
    AppButtonComponent,
    ProductItemComponent,
    ProductListComponent
  ],
  declarations: [
    ShopyHeaderComponent,
    AppButtonComponent,
    ProductItemComponent,
    ProductListComponent,
  ]
})
export class SharedComponentsModule { }
