import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AppProduct } from './component/product.component';
import { AppInventory } from './component/Inventory.component';
import { PageNotFoundComponent } from  './component/NotFound.component';
import { ProductFormComponent } from './component/product-form.component';

import { MultiplierPipe } from './pipes/multiplier.pipe';

import { RouterModule, Routes } from '@angular/router';
//import { Ng2PaginationModule } from 'ng2-pagination';

const appRoutes: Routes = [
    { path: 'Product', component: AppProduct },
    { path: 'Inventory', component: AppInventory },
    { path: '**', component: PageNotFoundComponent } 
];

const appComponents = [
    
];

@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule.forRoot(appRoutes), FormsModule ],
  declarations: [ AppComponent, AppProduct, AppInventory, PageNotFoundComponent, ProductFormComponent, MultiplierPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
