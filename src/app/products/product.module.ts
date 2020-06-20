import { NgModule } from '@angular/core';
import { ProductListComponent } from 'src/products/product-list.component';
import { ProductDetailComponent } from 'src/products/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from 'src/products/product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
