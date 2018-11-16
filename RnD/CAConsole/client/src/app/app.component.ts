import { Component } from '@angular/core';

@Component({
 selector: 'app',
 template: '<h1>Coding Anthem Started!</h1>'
})
export class AppComponent {

 constructor(){
   console.log("I am Coding Anthem!");
 }
}