import { Injectable, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export const TIPOS: Map<number, string> = new Map<number, string>();
TIPOS.set(1, 'Aluguel de imóveis e despesas concernente a eles');
TIPOS.set(2, 'Divulgação da atividade parlamentar');
TIPOS.set(3, 'Aquisição de materiais de consumo para uso no escritório');
TIPOS.set(4, 'Passagens aéres, aquáticas e terrestres nacionais');
TIPOS.set(
  5,
  'Contratação de consultorias, assessorias, pesquisas, trabalhos técnicos e outros serviços'
);
TIPOS.set(6, 'Locomoção, hospedagem, alimentação e combustíveis');
TIPOS.set(7, 'Serviço de Segurança Privada');
TIPOS.set(8, 'Total');

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

  public formatTipo(id: number) {
    return TIPOS.get(id);
  }
}
