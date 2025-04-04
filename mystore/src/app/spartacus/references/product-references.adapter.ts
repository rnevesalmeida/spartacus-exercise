/*
 * SPDX-FileCopyrightText: 2025 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProductReference } from '@spartacus/core';
import { Observable } from 'rxjs';

export abstract class ProductReferencesAdapter {
  /**
   * Abstract method used to load product references for a given product.
   * References can be loaded from alternative sources, as long as the structure
   * converts to the `ProductReference[]`.
   *
   * @param productCode The `productCode` for given product
   * @param referenceType Reference type according to enum ProductReferenceTypeEnum
   * @param pageSize Maximum number of product refrence to load
   */
  abstract load(
    productCode: string,
    referenceType?: string,
    pageSize?: number
  ): Observable<ProductReference[]>;
}
