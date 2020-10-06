import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent implements OnInit {
  @Input()
  public titulo: string;

  public imagem: string = '';

  public index: number = 0;

  @Input()
  public fotos: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.imagem = this.fotos[0];
  }

  desabilitaBackward() {
    return this.index === 0;
  }

  desabilitaForward() {
    return this.index === this.fotos.length - 1;
  }

  backward() {
    this.index--;
    this.imagem = this.fotos[this.index];
  }

  forwardFast() {
    this.index = this.fotos.length - 1;
    this.imagem = this.fotos[this.index];
  }

  backwardFast() {
    this.index = 0;
    this.imagem = this.fotos[this.index];
  }

  forward() {
    this.index++;
    this.imagem = this.fotos[this.index];
  }
}
