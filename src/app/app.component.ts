import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'test';
  showPopup = false;
  cardsListArray = [];

  openPopup() {
    this.showPopup = true;
  }

  cardsList(cards){
    this.cardsListArray.push(cards[0]);
    console.log(this.cardsListArray)
    this.showPopup = false;
  }
}
