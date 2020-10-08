import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SenadoresService {
  apiPath = 'http://localhost:3001/senadores';

  despesaSenadorPath = 'http://localhost:3001/despesasSenadores/';

  constructor(private http: HttpClient) {}

  getSenadores(): Observable<any> {
    return this.http.get(`${this.apiPath}`);
  }

  getDespesaSenador(id: string): Observable<any> {
    return this.http.get(`${this.despesaSenadorPath}${id}`);
  }
}
