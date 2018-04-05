// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Project Modules
import { SharedComponentsModule } from 'app/shared-components/shared.components.module';

// Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CartComponent } from './cart/cart.component';

// Additional libraries
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedComponentsModule,
    AppRoutingModule,
    // AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
