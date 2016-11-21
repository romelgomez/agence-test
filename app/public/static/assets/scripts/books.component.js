"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var BooksComponent = (function () {
    function BooksComponent() {
        this.books = [
            'books 1',
            'books 2',
            'books 3',
            'books 4'
        ];
    }
    BooksComponent = __decorate([
        core_1.Component({
            selector: 'books',
            template: "\n    <div>\n      <h4>Some List of Books</h4>\n      <ul>\n        <li *ngFor=\"let book of books\"> {{book}} </li>\n\n        <img src=\"./app/public/static/assets/images/wtp.jpg\" width=\"100\" >\n\n\n      </ul>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], BooksComponent);
    return BooksComponent;
}());
exports.BooksComponent = BooksComponent;
