import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { TGEntity } from 'app/shared/model/tg-entity.model';
import { TGEntityService } from './tg-entity.service';
import { TGEntityComponent } from './tg-entity.component';
import { TGEntityDetailComponent } from './tg-entity-detail.component';
import { TGEntityUpdateComponent } from './tg-entity-update.component';
import { TGEntityDeletePopupComponent } from './tg-entity-delete-dialog.component';
import { ITGEntity } from 'app/shared/model/tg-entity.model';

@Injectable({ providedIn: 'root' })
export class TGEntityResolve implements Resolve<ITGEntity> {
  constructor(private service: TGEntityService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITGEntity> {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<TGEntity>) => response.ok),
        map((tGEntity: HttpResponse<TGEntity>) => tGEntity.body)
      );
    }
    return of(new TGEntity());
  }
}

export const tGEntityRoute: Routes = [
  {
    path: '',
    component: TGEntityComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      defaultSort: 'id,asc',
      pageTitle: 'TGEntities'
    }
    //,canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: TGEntityDetailComponent,
    resolve: {
      tGEntity: TGEntityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'TGEntities'
    }
    //,canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: TGEntityUpdateComponent,
    resolve: {
      tGEntity: TGEntityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'TGEntities'
    }
    //,canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: TGEntityUpdateComponent,
    resolve: {
      tGEntity: TGEntityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'TGEntities'
    }
    //,canActivate: [UserRouteAccessService]
  }
];

export const tGEntityPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: TGEntityDeletePopupComponent,
    resolve: {
      tGEntity: TGEntityResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'TGEntities'
    },
    //canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
