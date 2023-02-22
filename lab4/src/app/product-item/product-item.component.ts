import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Product } from '../amazon';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product; 
  @Output() redirect = new EventEmitter();
  @Output() open = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}