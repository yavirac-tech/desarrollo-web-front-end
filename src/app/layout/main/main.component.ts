import { Component } from '@angular/core';
import {TopbarComponent} from '../topbar/topbar.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [
    TopbarComponent,
    RouterOutlet
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
