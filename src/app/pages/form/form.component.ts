import {Component, inject, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  @Input() public codigo: number = 0;
  // private activatedRoute = inject(ActivatedRoute);

  constructor() {
    if (this.codigo === 1) {
      console.log('id encontrado en constructor');
    }

    console.log(this.codigo);
    // console.log(this.activatedRoute.snapshot.params['id']);
  }

  ngOnInit() {
    if (this.codigo === 1) {
      console.log('id encontrado en ngoninit');
    }
    console.log(this.codigo);
    // console.log(this.activatedRoute.snapshot.params['id']);
  }
}
