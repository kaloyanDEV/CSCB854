import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Cscb854SharedModule } from 'app/shared';
import {
  TGEntityComponent,
  TGEntityDetailComponent,
  TGEntityUpdateComponent,
  TGEntityDeletePopupComponent,
  TGEntityDeleteDialogComponent,
  tGEntityRoute,
  tGEntityPopupRoute
} from './';

const ENTITY_STATES = [...tGEntityRoute, ...tGEntityPopupRoute];

@NgModule({
  imports: [Cscb854SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    TGEntityComponent,
    TGEntityDetailComponent,
    TGEntityUpdateComponent,
    TGEntityDeleteDialogComponent,
    TGEntityDeletePopupComponent
  ],
  entryComponents: [TGEntityComponent, TGEntityUpdateComponent, TGEntityDeleteDialogComponent, TGEntityDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Cscb854TGEntityModule {}
