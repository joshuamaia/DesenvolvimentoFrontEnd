import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent implements OnInit {
  @Input()
  public titulo: string;

  public index: number = 0;

  @Input()
  public fotos: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  desabilitaBackward() {
    return this.index === 0;
  }

  desabilitaForward() {
    return this.index === this.fotos.length - 1;
  }

  backward() {
    this.index--;
  }

  forwardFast() {
    this.index = this.fotos.length - 1;
  }

  backwardFast() {
    this.index = 0;
  }

  forward() {
    this.index++;
  }
}
