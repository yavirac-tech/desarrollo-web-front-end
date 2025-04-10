import { Component } from '@angular/core';
import {FormComponent} from '../form/form.component';

@Component({
  selector: 'app-home',
  imports: [
    FormComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
