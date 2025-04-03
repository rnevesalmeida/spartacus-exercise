import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';

@Injectable()
export class CustomProductNormalizer
  implements Converter<Occ.Product, Product>
{
  convert(source: any, target: any): Product {
    // console.log('s', source);
    // console.log('t', target);

    const result = {
      ...source,
    };

    return {};
  }
}
