import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ShopyHeaderComponent } from './shopy-header/shopy-header.component';
import { AppButtonComponent } from './app-button/app-button.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';

import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/primeng';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {SliderModule} from 'primeng/slider';

// Additional libraries
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SInputComponent } from './s-input/s-input.component';
import { AppTableComponent } from './app-table/app-table.component';


@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    RouterModule,
    DataViewModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
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
    DataViewModule,
    AppTableComponent,
    DropdownModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    SliderModule
  ],
  declarations: [
    ShopyHeaderComponent,
    AppButtonComponent,
    ProductItemComponent,
    ProductListComponent,
    SearchBoxComponent,
    SInputComponent,
    AppTableComponent
  ]
})
export class SharedComponentsModule { }
