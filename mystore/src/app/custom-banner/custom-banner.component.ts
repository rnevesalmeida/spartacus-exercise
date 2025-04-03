import { Component, effect, OnInit, Signal, signal } from '@angular/core';
import {
  CmsBannerComponent,
  CmsService,
  SemanticPathService,
} from '@spartacus/core';
import { BannerComponent, CmsComponentData } from '@spartacus/storefront';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-custom-banner',
  templateUrl: './custom-banner.component.html',
  styleUrl: './custom-banner.component.scss',
})
export class CustomBannerComponent extends BannerComponent {
  dataSignal = toSignal<CmsBannerComponent>(this.data$);

  constructor(
    component: CmsComponentData<CmsBannerComponent>,
    urlService: SemanticPathService,
    cmsService: CmsService
  ) {
    super(component, urlService, cmsService),
      effect(() => {
        console.log('The current result is:', this.dataSignal());
      });
  }
}
