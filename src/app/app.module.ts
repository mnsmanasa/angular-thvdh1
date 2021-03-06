import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NewProfileFormComponent } from './new-profile-form/new-profile-form.component';

import { CardsListComponent } from './cards-list/cards-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NewProfileFormComponent,CardsListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
