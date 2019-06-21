import { Component, Input, } from '@angular/core';

@Component({
    selector: 'my-component',
    templateUrl: './my.component.html',
    styleUrls: [ './my.component.css' ]
})

export class MyComponent {

  constructor(){
    console.log( 'My' );
  }

}
