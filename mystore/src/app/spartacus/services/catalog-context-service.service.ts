import { Injectable } from '@angular/core';
import { SiteContext, SiteContextConfig } from '@spartacus/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CatalogContextService implements SiteContext<string> {
  private activeCatalog: BehaviorSubject<string>;

  constructor(private config: SiteContextConfig) {
    const defaultValue = this.getValuesFromConfig()[0] || '';
    this.activeCatalog = new BehaviorSubject<string>(defaultValue);
  }

  getAll(): Observable<string[]> {
    return of(this.getValuesFromConfig());
  }

  getActive(): Observable<string> {
    return this.activeCatalog;
  }

  setActive(catalog: string): any {
    this.activeCatalog.next(catalog);
  }

  private getValuesFromConfig() {
    return (this.config.context && this.config.context['catalog']) || [];
  }
}
