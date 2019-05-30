import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ITGEntity } from 'app/shared/model/tg-entity.model';

type EntityResponseType = HttpResponse<ITGEntity>;
type EntityArrayResponseType = HttpResponse<ITGEntity[]>;

@Injectable({ providedIn: 'root' })
export class TGEntityService {
  //TODO hardcoded
  //private SERVER_API_URL = 'localhost:3000/';

  public resourceUrl = SERVER_API_URL + 'api/tg-entities';
  public resourceSearchUrl = SERVER_API_URL + 'api/_search/tg-entities';

  constructor(protected http: HttpClient) {}

  create(tGEntity: ITGEntity): Observable<EntityResponseType> {
    return this.http.post<ITGEntity>(this.resourceUrl, tGEntity, { observe: 'response' });
  }

  update(tGEntity: ITGEntity): Observable<EntityResponseType> {
    return this.http.put<ITGEntity>(this.resourceUrl, tGEntity, { observe: 'response' });
  }

  find(id: string): Observable<EntityResponseType> {
    return this.http.get<ITGEntity>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ITGEntity[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: string): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  search(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ITGEntity[]>(this.resourceSearchUrl, { params: options, observe: 'response' });
  }
}
