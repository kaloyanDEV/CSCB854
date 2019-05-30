import { NgModule } from '@angular/core';

import { Cscb854SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [Cscb854SharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [Cscb854SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Cscb854SharedCommonModule {}
