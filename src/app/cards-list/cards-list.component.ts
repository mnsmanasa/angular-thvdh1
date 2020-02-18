import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent {
  cardsList = [];
  @Input() cards;
}