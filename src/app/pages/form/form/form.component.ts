import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {InputText} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {Button} from 'primeng/button';
import {HttpClient} from '@angular/common/http';

export interface ProductInterface {
  id: number;
  name: string;
  quantity: number;
  category: string;
}

@Component({
  selector: 'app-form',
  imports: [
    JsonPipe,
    InputText,
    FormsModule,
    Button
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Input() productIn!: ProductInterface;
  @Output() productOut: EventEmitter<ProductInterface> = new EventEmitter();
  @Output() event1: EventEmitter<boolean> = new EventEmitter();
  private readonly httpClient = inject(HttpClient);
  private url = 'https://67ef0ef3c11d5ff4bf7ba62a.mockapi.io/api/v1/products';

  sendProduct() {
    this.productOut.emit(this.productIn);
  }

  saveProduct() {
    this.httpClient.post(this.url, {body: JSON.stringify(this.productIn)})
      .subscribe();
  }

  updateProduct() {
    this.httpClient.put(this.url + '/' + this.productIn.id, {body: JSON.stringify({name:'manzana'})})
      .subscribe();
  }

  sendEvent1() {
    this.event1.emit(true);
  }
}
