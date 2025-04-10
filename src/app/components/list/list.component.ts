import {Component, inject} from '@angular/core';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {HttpClient} from '@angular/common/http';
import {JsonPipe} from '@angular/common';
import {InputText} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {FormComponent} from '../form/form.component';

export interface ProductInterface {
  id: number;
  name: string;
  quantity: number;
  category: string;
}

@Component({
  selector: 'app-list',
  imports: [TableModule, ButtonModule, TooltipModule, JsonPipe, InputText, FormsModule, FormComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  private httpClient = inject(HttpClient);
  private url = 'https://67ef0ef3c11d5ff4bf7ba62a.mockapi.io/api/v1/products';
  protected products: ProductInterface[] = [];
  protected product!: ProductInterface;

  constructor() {
    this.findAll();
    this.findOne(2);
  }

  findAll() {
    const request = this.httpClient.get<ProductInterface[]>(this.url);
    request.subscribe(response => {
      this.products = response;
    });
  }

  findOne(id: number) {
    this.httpClient
      .get<ProductInterface>(this.url + '/' + id)
      .subscribe(response => {
        this.product = response;
      });
  }
}
