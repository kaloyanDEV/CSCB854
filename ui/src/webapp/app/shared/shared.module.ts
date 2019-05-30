import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Cscb854SharedLibsModule, Cscb854SharedCommonModule } from './';
import { TGEntityComponent } from '../entities/tg-entity'

@NgModule({
  imports: [Cscb854SharedLibsModule, Cscb854SharedCommonModule],
  declarations: [],
  entryComponents: [],
  exports: [Cscb854SharedCommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Cscb854SharedModule {
  static forRoot() {
    return {
      ngModule: Cscb854SharedModule
    };
  }
}
