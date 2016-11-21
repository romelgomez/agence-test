import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { BooksComponent } from './books.component'
import { MaterialModule } from '@angular/material';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, BooksComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
