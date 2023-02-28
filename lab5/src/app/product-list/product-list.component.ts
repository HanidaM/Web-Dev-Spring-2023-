import { Component, Input  } from '@angular/core';

import { products } from '../kaspi';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() cat!: number;
  products = products;

  share(link?:string) {
    window.location.href = 'https://t.me/share/url?url='+link;
  }
  like(id?:number){
    this.products[id! - 1].likes += 1;
  }
  remove(id?:any){
    document.getElementById(id)!.style.display = 'none';
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/