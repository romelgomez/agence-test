import { Component } from '@angular/core';


@Component({
  selector: 'books',
  template: `
    <div>
      <h4>Some List of Books</h4>
      <ul>
        <li *ngFor="let book of books"> {{book}} </li>

        <img src="./app/public/static/assets/images/wtp.jpg" width="100" >


      </ul>
    </div>
  `
})
export class BooksComponent {

    books: string[];

    constructor (){
      this.books = [
        'books 1',
        'books 2',
        'books 3',
        'books 4'
      ];
    }

}
