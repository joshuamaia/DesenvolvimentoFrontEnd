import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SenadoresService {
  apiPath = 'http://localhost:3001/senadores';
  tiposPath = 'http://localhost:3001/tipos';
  despesaSenadorPath = 'http://localhost:3001/despesasSenadores/';

  constructor(private http: HttpClient) {}

  getSenadores(): Observable<any> {
    return this.http.get(`${this.apiPath}`);
  }

  getTipos(): Observable<any> {
    return this.http.get(`${this.tiposPath}`);
  }

  getDespesaSenador(id: string): Observable<any> {
    return this.http.get(`${this.despesaSenadorPath}${id}`);
  }
}
