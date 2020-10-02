import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SenadoresService } from '../senadores/senadores.service';

@Component({
  selector: 'app-despesa-senadores',
  templateUrl: './despesa-senadores.component.html',
  styleUrls: ['./despesa-senadores.component.css'],
})
export class DespesaSenadoresComponent implements OnInit {
  public despesasResumo: Map<number, number> = new Map<number, number>();
  public nomeSenador: string = '';
  public despesas = [];

  constructor(
    private router: ActivatedRoute,
    private senadoresService: SenadoresService,
    private routerBack: Router
  ) {}

  ngOnInit(): void {
    for (let i = 1; i <= 8; i++) {
      this.despesasResumo.set(i, 0);
    }

    this.router.paramMap.subscribe((response) => {
      this.senadoresService
        .getDespesaSenador(response.get('id'))
        .subscribe((response) => {
          this.nomeSenador = response.nomeSenador;
          this.despesas = response.despesas;

          this.despesas.forEach((d) => {
            this.despesasResumo.set(
              d.tipo,
              this.despesasResumo.get(d.tipo) + d.valor
            );
            this.despesasResumo.set(8, this.despesasResumo.get(8) + d.valor);
          });
        });
    });
  }

  voltar() {
    this.routerBack.navigate(['senadores']);
  }
}
