import { Component } from '@angular/core';

import { Profile } from '../profile';

@Component({
  selector: 'new-profile-form',
  templateUrl: './new-profile-form.component.html',
  styleUrls: ['./new-profile-form.component.css']
})
export class NewProfileFormComponent {
  model = new Profile();

  submitted = false;

  onSubmit() { 

   }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/