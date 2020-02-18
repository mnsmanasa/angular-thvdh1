import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";

@Component({
  selector: "cards-list",
  templateUrl: "./cards-list.component.html",
  styleUrls: ["./cards-list.component.css"]
})
export class CardsListComponent implements OnInit {
  @Input() cards;

 ngOnInit() {
   console.log('dfg',this.cards)
	}
 
}
