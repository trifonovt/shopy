// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

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
import { Product as FakeProduct } from './stores/product.store';
import { ProductService } from './services/products/product.service';
import { BaseService } from './services/http/base.service';
import { HttpService } from './services/http/http.service';
import { HelperService } from './services/http/helper.service';
import { ErrorHandlerService } from './services/http/error-handler.service';

//Models
import { AddEditProductComponent } from './pages/add-edit-product/add-edit-product.component';
import { ProductListComponent } from './pages/product-list-page/components/product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductListPageComponent,
    AddEditProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    SharedComponentsModule,
    AppRoutingModule,
    MobxAngularModule,
    NgbModule.forRoot()
  ],
  providers: [
    ProductService,
    BaseService,
    HttpService,
    HelperService,
    ErrorHandlerService,
    FakeProduct
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  static injector: Injector;
    constructor(injector: Injector) {
        AppModule.injector = injector;
    }
 }
