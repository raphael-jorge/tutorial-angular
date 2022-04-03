import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items?: Product[];

  constructor(private cartService: CartService) {
    this.items = cartService.getItems();
  }

  ngOnInit(): void {}
}
