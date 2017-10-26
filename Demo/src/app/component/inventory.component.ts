import { Component } from '@angular/core';
import { Router }  from '@angular/router'; 

@Component ({
   selector: 'my-app',
   templateUrl: 'app/component/inventory.component.html',
})
export   class   AppInventory  {
    constructor(private _router: Router){} 
    
    onBack(): void { 
        this._router.navigate(['/Product']); 
    } 

    //Life Cycle
    ngOnInit(){
        console.log('ngOnInit');
    }

    ngDoCheck(){
        console.log('ngDoCheck');
    }

    ngAfterContentInit(){
        console.log('ngAfterContentInit');
    }

    ngAfterContentChecked(){
        console.log('ngAfterContentChecked');
    }

    ngAfterViewInit(){
        console.log('ngAfterViewInit');
    }

    ngAfterViewChecked(){
        console.log('ngAfterViewChecked');
    }

    ngOnChanges(){
        console.log('ngOnChanges');
    }

    ngOnDestroy(){
        console.log('ngOnDestroy');
    }


}