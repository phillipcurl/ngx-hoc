import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HocConfig } from './models';
import { HOC_SERVICES } from './services';
import { HocConfigToken } from './tokens';
import { DEFAULT_CONFIG } from './constants';
import { HOC_COMPONENTS } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...HOC_COMPONENTS
  ],
  providers: [
    ...HOC_SERVICES,
    {
      provide: HocConfigToken,
      useValue: DEFAULT_CONFIG
    }
  ],
  exports: [
    ...HOC_COMPONENTS
  ]
})
export class HocModule {
  static configureHOC(config: HocConfig): ModuleWithProviders {
    return {
      ngModule: HocModule,
      providers: [
        {
          provide: HocConfigToken,
          useValue: config
        }
      ]
    };
  }
}
