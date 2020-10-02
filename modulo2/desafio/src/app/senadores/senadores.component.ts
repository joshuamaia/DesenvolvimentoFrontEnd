import { Component, OnInit } from '@angular/core';
import { SenadoresService } from './senadores.service';

@Component({
  selector: 'app-senadores',
  templateUrl: './senadores.component.html',
  styleUrls: ['./senadores.component.css'],
})
export class SenadoresComponent implements OnInit {
  public senadores = [];

  constructor(private senadoresService: SenadoresService) {}

  ngOnInit(): void {
    this.senadoresService.getSenadores().subscribe((response) => {
      this.senadores = response;
      console.log(this.senadores);
    });
  }
}
