import {Component, inject} from '@angular/core';
import {FormComponent} from '../form/form.component';
import {Button} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {Tooltip} from 'primeng/tooltip';
import {HttpClient} from '@angular/common/http';
import {ProductInterface} from '../../../components/list/list.component';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [
    FormComponent,
    Button,
    FormComponent,
    TableModule,
    Tooltip,
    JsonPipe
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  private httpClient = inject(HttpClient);
  private url = 'https://67ef0ef3c11d5ff4bf7ba62a.mockapi.io/api/v1/products';
  protected products: ProductInterface[] = [];
  protected product!: ProductInterface;
  protected data!: ProductInterface;

  constructor() {
    this.findAll();
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

  catchData(product: ProductInterface) {
    const index = this.products
      .findIndex(item => item.id === product.id);

    if (index > -1) {
      this.products[index] = product;
    }

  }
  
  showEvent(data:boolean) {
    alert(data);
  }
}
