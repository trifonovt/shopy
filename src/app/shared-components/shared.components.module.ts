import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ShopyHeaderComponent } from './shopy-header/shopy-header.component';
import { AppButtonComponent } from './app-button/app-button.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {SliderModule} from 'primeng/slider';

// Additional libraries
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SInputComponent } from './s-input/s-input.component';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    RouterModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    SliderModule
  ],
  exports: [
    ShopyHeaderComponent,
    AppButtonComponent,
    ProductItemComponent,
    ProductListComponent,
    SearchBoxComponent,
    SInputComponent,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    SliderModule
  ],
  declarations: [
    ShopyHeaderComponent,
    AppButtonComponent,
    ProductItemComponent,
    ProductListComponent,
    SearchBoxComponent,
    SInputComponent
  ]
})
export class SharedComponentsModule { }
