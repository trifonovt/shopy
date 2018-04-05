import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { ShopyHeaderComponent } from './components/shopy-header/shopy-header.component';
import { AppButtonComponent } from './components/app-button/app-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopyHeaderComponent,
    AppButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
