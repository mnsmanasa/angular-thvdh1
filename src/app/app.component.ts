import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'test';
  showPopup = false;

  openPopup() {
    this.showPopup = true;
  }

  cardsList(cards){
    console.log(cards)
    this.showPopup = false;
  }
}
