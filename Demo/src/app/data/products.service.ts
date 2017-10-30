import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IProduct } from './products';
import { AppConfigs } from '../configs/appConfig';

@Injectable()
export class ProductService {
   constructor(private _http: Http){}
   
   getproducts(): Observable<IProduct[]> {
      return this._http.get(AppConfigs.API_PRODUCT)
      .map((response: Response) => <IProduct[]> response.json())
      .do(data => console.log(JSON.stringify(data)))
      .catch(this.handleError); 
   }

   private handleError(error: Response) { 
   	console.error(error); 
    	return Observable.throw(error.json().error()); 
   } 
}