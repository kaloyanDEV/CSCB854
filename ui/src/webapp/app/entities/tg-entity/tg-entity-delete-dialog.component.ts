import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ITGEntity } from 'app/shared/model/tg-entity.model';
import { TGEntityService } from './tg-entity.service';

@Component({
  selector: 'jhi-tg-entity-delete-dialog',
  templateUrl: './tg-entity-delete-dialog.component.html'
})
export class TGEntityDeleteDialogComponent {
  tGEntity: ITGEntity;

  constructor(protected tGEntityService: TGEntityService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: string) {
    this.tGEntityService.delete(id).subscribe(response => {
      this.eventManager.broadcast({
        name: 'tGEntityListModification',
        content: 'Deleted an tGEntity'
      });
      this.activeModal.dismiss(true);
    });
  }
}

@Component({
  selector: 'jhi-tg-entity-delete-popup',
  template: ''
})
export class TGEntityDeletePopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ tGEntity }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(TGEntityDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
        this.ngbModalRef.componentInstance.tGEntity = tGEntity;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate(['/tg-entity', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate(['/tg-entity', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          }
        );
      }, 0);
    });
  }

  ngOnDestroy() {
    this.ngbModalRef = null;
  }
}
