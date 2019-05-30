import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITGEntity } from 'app/shared/model/tg-entity.model';

@Component({
  selector: 'jhi-tg-entity-detail',
  templateUrl: './tg-entity-detail.component.html'
})
export class TGEntityDetailComponent implements OnInit {
  tGEntity: ITGEntity;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ tGEntity }) => {
      this.tGEntity = tGEntity;
    });
  }

  previousState() {
    window.history.back();
  }
}
