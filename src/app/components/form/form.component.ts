import {Component} from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [
    InputText,
    FormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  protected name: string = 'Mauricio';
  protected lastname: string = 'Tamayo';
  protected day: string = '1';
}
