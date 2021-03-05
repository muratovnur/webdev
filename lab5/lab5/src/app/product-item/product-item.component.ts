import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() removeItem = new EventEmitter();
  constructor() {}
  ngOnInit(): void {
  }
  likeIncrement(): void {
    this.product.likes++;
  }
  removeProduct(name: string): void {
    this.removeItem.emit(name);
  }
}
