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
var AppComponent = (function () {
    function AppComponent() {
        this.someVar = 'some string var';
        this.items = [];
    }
    AppComponent.prototype.someMethod = function () {
        this.items = [
            'val 1',
            'val 2',
            'val 3',
            'val 4'
        ];
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>Hello Angular!</h1>\n    <div>{{someVar}}</div>\n\n    <div>\n      <h4>Some List</h4>\n      <ul>\n        <li *ngFor=\"let item of items\"> {{item}} </li>\n      </ul>\n    </div>\n    <button (click)=\"someMethod()\">Click Me</button>\n\n    <div>\n      <books></books>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
