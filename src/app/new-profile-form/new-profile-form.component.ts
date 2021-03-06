import { Component, EventEmitter, Input, Output  } from '@angular/core';

import { Profile } from '../profile';

@Component({
  selector: 'new-profile-form',
  templateUrl: './new-profile-form.component.html',
  styleUrls: ['./new-profile-form.component.css']
})
export class NewProfileFormComponent {
  model = new Profile(null, null);
  cardsList = [];
  @Output() cards = new EventEmitter()

  submitted = false;

  onSubmit(data) { 
    this.cardsList.push({
      name: data.controls['name'].value,
      desc: data.controls['desc'].value
    })
    this.cards.emit(this.cardsList)
  }

}