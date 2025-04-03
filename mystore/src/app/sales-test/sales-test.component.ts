import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@spartacus/core';

import '@spartacus/storefront';

declare module '@spartacus/core' {
  interface Product {
    firstCategoryCode?: string;
  }
}

@Component({
  selector: 'app-sales-test',
  standalone: false,
  templateUrl: './sales-test.component.html',
  styleUrl: './sales-test.component.scss',
})
export class SalesTestComponent implements OnInit {
  pageLabel: string | undefined;
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.product?.firstCategoryCode;
    this.route.data.subscribe((data) => {
      this.pageLabel = data['pageLabel'];
      // console.log('Page Label:', this.pageLabel);
    });
  }
}
