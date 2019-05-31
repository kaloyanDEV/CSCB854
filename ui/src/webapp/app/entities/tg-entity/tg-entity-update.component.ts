import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ITGEntity, TGEntity } from 'app/shared/model/tg-entity.model';
import { TGEntityService } from './tg-entity.service';

@Component({
  selector: 'jhi-tg-entity-update',
  templateUrl: './tg-entity-update.component.html'
})
export class TGEntityUpdateComponent implements OnInit {
  tGEntity: ITGEntity;
  isSaving: boolean;

  editForm = this.fb.group({
    _id: [],
    name: [null, [Validators.required, Validators.maxLength(20)]],
    description: [],
    category: [null, [Validators.required]]
  });

  constructor(protected tGEntityService: TGEntityService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ tGEntity }) => {
      this.updateForm(tGEntity);
      this.tGEntity = tGEntity;
    });
  }

  updateForm(tGEntity: ITGEntity) {
    this.editForm.patchValue({
      _id: tGEntity._id,
      name: tGEntity.name,
      description: tGEntity.description,
      category: tGEntity.category
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const tGEntity = this.createFromForm();
    if (tGEntity._id !== undefined) {
      this.subscribeToSaveResponse(this.tGEntityService.update(tGEntity));
    } else {
      this.subscribeToSaveResponse(this.tGEntityService.create(tGEntity));
    }
  }

  private createFromForm(): ITGEntity {
    const entity = {
      ...new TGEntity(),
      _id: this.editForm.get(['_id']).value,
      name: this.editForm.get(['name']).value,
      description: this.editForm.get(['description']).value,
      category: this.editForm.get(['category']).value
    };
    return entity;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITGEntity>>) {
    result.subscribe((res: HttpResponse<ITGEntity>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
}
