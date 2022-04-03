import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor() {}

  ngOnInit(): void {}

  onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }

  share(): void {
    window.alert('The product has been shared!');
  }
}
