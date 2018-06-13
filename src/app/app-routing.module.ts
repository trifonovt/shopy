import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { AddEditProductComponent } from './pages/add-edit-product/add-edit-product.component';

export const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductListPageComponent },
  { path: 'product', component: AddEditProductComponent },
  { path: 'product/:id', component: AddEditProductComponent },
  { path: '**', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

