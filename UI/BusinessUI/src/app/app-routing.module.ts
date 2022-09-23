import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './products/add-edit/add-edit.component';

import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'products', component:ProductsComponent},
  {path:'products/UpdateProduct/:ID', component:AddEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
