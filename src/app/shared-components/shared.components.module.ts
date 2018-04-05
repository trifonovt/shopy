import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopyHeaderComponent } from './shopy-header/shopy-header.component';
import { AppButtonComponent } from './app-button/app-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ShopyHeaderComponent,
    AppButtonComponent,
  ],
  declarations: [
    ShopyHeaderComponent,
    AppButtonComponent,
  ]
})
export class SharedComponentsModule { }
