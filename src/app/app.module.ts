// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// 3Party Modules
import { MobxAngularModule } from 'mobx-angular';

// Project Modules
import { SharedComponentsModule } from 'app/shared-components/shared.components.module';

// Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CartComponent } from './cart/cart.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';

// Services
import { Product } from './stores/product.store';

// Additional libraries
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductListPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedComponentsModule,
    AppRoutingModule,
    MobxAngularModule,
    // AngularFontAwesomeModule,
    NgbModule.forRoot()
  ],
  providers: [Product],
  bootstrap: [AppComponent]
})
export class AppModule { }
