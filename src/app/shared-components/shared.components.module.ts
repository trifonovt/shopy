import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { ShopyHeaderComponent } from './shopy-header/shopy-header.component';
import { AppButtonComponent } from './app-button/app-button.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';

// Additional libraries
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    RouterModule
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
    ProductListComponent
  ]
})
export class SharedComponentsModule { }
