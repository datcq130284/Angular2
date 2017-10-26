import { Component } from '@angular/core';
import { IProduct } from '../data/products';
import { ProductService } from '../data/products.service';
//import { PaginatePipe, PaginationService } from 'ng2-pagination';

@Component ({
   selector: 'my-app',
   templateUrl: 'app/component/product.component.html',
   providers: [ProductService]
})

export   class   AppProduct  {
    iproducts: IProduct[];
    newdate = new Date();

    constructor(private _product: ProductService) {
    }
    
    ngOnInit() : void {
       this._product.getproducts()
       .subscribe(iproducts => this.iproducts = iproducts);
    }
}