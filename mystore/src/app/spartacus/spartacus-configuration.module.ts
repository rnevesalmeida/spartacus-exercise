import { NgModule } from '@angular/core';
import { translationChunksConfig, translationsEn } from '@spartacus/assets';
import {
  ContextServiceMap,
  I18nConfig,
  OccConfig,
  PRODUCT_NORMALIZER,
  provideConfig,
  serviceMapFactory,
  SiteContextConfig,
} from '@spartacus/core';
import {
  defaultCmsContentProviders,
  layoutConfig,
  mediaConfig,
} from '@spartacus/storefront';
import { CatalogContextService } from './services/catalog-context-service.service';
import { CustomProductNormalizer } from './services/custom-product-normalizer';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    provideConfig(layoutConfig),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          baseUrl:
            'https://api.cx0fb7mb3-valtechgm2-d1-public.model-t.cc.commerce.ondemand.com/',
        },
      },
    }),
    provideConfig(<SiteContextConfig>{
      context: {},
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: { en: translationsEn },
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
    }),
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          endpoints: {
            baseSites: 'basesites?fields=baseSites(uid,urlPatterns)',
            product: 'products/${productCode}?fields=DEFAULT',
          },
        },
      },
    }),
    {
      provide: ContextServiceMap,
      useFactory: () => ({
        ...serviceMapFactory(),
        catalog: CatalogContextService,
      }),
    },
    provideConfig(<SiteContextConfig>{
      context: {
        urlParameters: ['catalog'],
        baseSite: ['powertools-spa'],
        catalog: ['summer', 'winter'],
      },
    }),
    provideConfig({
      routing: {
        routes: {
          product: {
            paths: [
              'catalog/:manufacturer/:productCode/:name',
              'catalog/:firstCategoryCode/:productCode/:name',
              'catalog/:productCode/:name',
            ],
          },
        },
      },
    }),

    {
      provide: PRODUCT_NORMALIZER,
      useClass: CustomProductNormalizer,
      multi: true,
    },
  ],
})
export class SpartacusConfigurationModule {}
