import { Component } from '@angular/core';

import { Profile } from '../profile';

@Component({
  selector: 'new-profile-form',
  templateUrl: './new-profile-form.component.html',
  styleUrls: ['./new-profile-form.component.css']
})
export class NewProfileFormComponent {
  model = new Profile(null, null);
  cardsList = [];

  submitted = false;

  onSubmit(data) { 
    this.cardsList.push({
      name: data.controls['name'].value,
      desc: data.controls['desc'].value
    })
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/