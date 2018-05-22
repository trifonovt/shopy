// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

// 3Party Modules
import { MobxAngularModule } from 'mobx-angular';

// Project Modules
import { SharedComponentsModule } from 'app/shared-components/shared.components.module';

// Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';

// Services
import { Product } from './stores/product.store';
import { ProductService } from './services/product.service';

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
    HttpClientModule,
    SharedComponentsModule,
    AppRoutingModule,
    MobxAngularModule,
    NgbModule.forRoot()
  ],
  providers: [Product, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
  static injector: Injector;
    constructor(injector: Injector) {
        AppModule.injector = injector;
    }
 }
