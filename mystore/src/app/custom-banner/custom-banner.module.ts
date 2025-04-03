import { CustomBannerComponent } from './custom-banner.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeaturesConfigModule, provideConfig } from '@spartacus/core';
import { GenericLinkModule, MediaModule } from '@spartacus/storefront';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    GenericLinkModule,
    MediaModule,
    FeaturesConfigModule,
  ],
  providers: [
    provideConfig({
      cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: CustomBannerComponent,
        },
      },
    }),
  ],
})
export class CustomBannerModule {}
