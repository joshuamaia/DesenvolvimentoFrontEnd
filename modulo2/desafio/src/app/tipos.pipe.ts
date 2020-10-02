import { OnInit, Pipe, PipeTransform } from '@angular/core';
import { SenadoresService } from './senadores/senadores.service';

@Pipe({
  name: 'tipos',
})
export class TiposPipe implements PipeTransform {
  private tipos = [
    {
      tipo: 1,
      descricao: 'Aluguel de imóveis e despesas concernente a eles',
    },
    {
      tipo: 2,
      descricao: 'Divulgação da atividade parlamentar',
    },
    {
      tipo: 3,
      descricao: 'Aquisição de materiais de consumo para uso no escritório',
    },
    {
      tipo: 4,
      descricao: 'Passagens aéres, aquáticas e terrestres nacionais',
    },
    {
      tipo: 5,
      descricao:
        'Contratação de consultorias, assessorias, pesquisas, trabalhos técnicos e outros serviços',
    },
    {
      tipo: 6,
      descricao: 'Locomoção, hospedagem, alimentação e combustíveis',
    },
    {
      tipo: 7,
      descricao: 'Serviço de Segurança Privada',
    },
    {
      tipo: 8,
      descricao: 'Total',
    },
  ];

  transform(value: number): unknown {
    const tipo = this.tipos.find((t) => t.tipo === value);
    return tipo.descricao;
  }
}
