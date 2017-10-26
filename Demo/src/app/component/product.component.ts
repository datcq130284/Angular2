import { Component } from '@angular/core';
import { IProduct } from '../data/products';
import { ProductService } from '../data/products.service';

@Component ({
   selector: 'my-app',
   templateUrl: 'app/component/product.component.html',
   providers: [ProductService]
})

export   class   AppProduct  {
    iproducts: IProduct[];

    constructor(private _product: ProductService) {
    }
    
    ngOnInit() : void {
       this._product.getproducts()
       .subscribe(iproducts => this.iproducts = iproducts);
    }
}