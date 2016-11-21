import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello Angular!</h1>
    <div>{{someVar}}</div>

    <div>
      <h4>Some List</h4>
      <ul>
        <li *ngFor="let item of items"> {{item}} </li>
      </ul>
    </div>
    <button (click)="someMethod()">Click Me</button>

    <div>
      <books></books>
    </div>
  `
})
export class AppComponent {

    someVar: string;

    items: string[];

    constructor (){
      this.someVar = 'some string var';
      this.items = [];
    }

    someMethod () : void {
      this.items = [
        'val 1',
        'val 2',
        'val 3',
        'val 4'
      ]
    }

}
