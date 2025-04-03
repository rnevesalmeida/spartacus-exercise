import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import {
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  AppRoutingModule,
  CmsPageGuard,
  GenericLinkModule,
  MediaModule,
} from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { SalesTestComponent } from './sales-test/sales-test.component';
import { RouterModule } from '@angular/router';
import { FaqTesComponent } from './faq-tes/faq-tes.component';
import {
  CmsSearchBoxComponent,
  FeaturesConfigModule,
  provideConfig,
  RouteLoadStrategy,
} from '@spartacus/core';
import { CustomBannerComponent } from './custom-banner/custom-banner.component';
import { CustomBannerModule } from './custom-banner/custom-banner.module';
import { CommonModule } from '@angular/common';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [AppComponent, SalesTestComponent],
  imports: [
    // CustomStorefrontComponentModule,
    CommonModule,
    RouterModule,
    GenericLinkModule,
    MediaModule,
    FeaturesConfigModule,
    CustomBannerModule,
    BrowserModule,
    StoreModule.forRoot({}),
    AppRoutingModule,
    EffectsModule.forRoot([]),
    SpartacusModule,
    RouterModule.forChild([
      {
        path: 'sales',
        component: SalesTestComponent,
        canActivate: [CmsPageGuard],
        data: {
          pageLabel: '/static/page',
        },
      },
      {
        path: 'faq',
        component: FaqTesComponent,
        canActivate: [CmsPageGuard],
      },
    ]),
  ],
  providers: [
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    provideConfig({
      routing: {
        loadStrategy: RouteLoadStrategy.ONCE,
      },
    }),
    provideConfig({
      cmsStructure: {
        pages: [
          {
            ignoreBackend: true,
            pageId: '/static/sales',
            template: 'ContentPage1Template',
            slots: {
              SearchBox: {
                componentIds: ['SearchBoxComponent'],
              },
            },
          },
        ],
        slots: {
          SearchBox: {
            componentIds: ['SearchBoxComponent'],
          },
        },
        components: {
          SearchBoxComponent: {
            flexType: 'SearchBoxComponent',
            displayProducts: true,
            displaySuggestions: true,
            maxProducts: 5,
            displayProductImages: true,
          } as CmsSearchBoxComponent,
        },
      },
    }),
    provideClientHydration(withEventReplay()),

    // provideOutlet({
    //   id: 'SearchBox',
    //   position: OutletPosition.BEFORE,
    //   component: FaqTesComponent,
    // }),
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
