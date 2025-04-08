import {Component, inject} from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {ProductInterface} from '../list/list.component';
import {HttpClient} from '@angular/common/http';

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
  protected products: ProductInterface[] = [];
  private httpClient = inject(HttpClient);
  private url = 'https://67ef0ef3c11d5ff4bf7ba62a.mockapi.io/api/v1/products';
  protected numeros: string[] = ['true','false'];

  constructor() {
    // this.findAll();
  }

  findAll() {
    const request = this.httpClient.get<ProductInterface[]>(this.url);
    request.subscribe(response => {
      this.products = response;
    });
  }
}
