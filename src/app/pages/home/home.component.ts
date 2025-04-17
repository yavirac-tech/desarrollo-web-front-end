import {Component, inject} from '@angular/core';
import {RegisterService} from '../auth/register/register.service';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-home',
  imports: [
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected registerService = inject(RegisterService);

  constructor() {
    console.log("HomeComponent");
    this.registerService.user = 'Tamayo';
  }


}
