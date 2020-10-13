import { Pipe, PipeTransform } from '@angular/core';
import { SenadoresService } from './senadores/senadores.service';

@Pipe({
  name: 'tipos',
})
export class TiposPipe implements PipeTransform {
  constructor(private senadoresService: SenadoresService) {}

  transform(value: number): string {
    return this.senadoresService.formatTipo(value);
  }
}
