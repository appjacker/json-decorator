import { Component, ViewChild} from '@angular/core';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent {
  
  constructor() { 
    public users = [
      { name: 'Jilles', age: 21 },
      { name: 'Todd', age: 24 },
      { name: 'Lisa', age: 18 }
    ];
  }


}
