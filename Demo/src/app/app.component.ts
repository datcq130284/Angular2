import { Component } from '@angular/core';
//import { appService } from './app.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  //template: `<h1>Hello {{name}}</h1>`,
  templateUrl: 'app/app.component.html'
})
export class AppComponent  { 
  name:String = 'Dat Chau';
  showHello:Boolean = true;
}
