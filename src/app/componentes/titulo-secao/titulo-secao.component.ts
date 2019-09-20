import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-secao',
  templateUrl: './titulo-secao.component.html',
  styleUrls: ['./titulo-secao.component.css']
})
export class TituloSecaoComponent implements OnInit {

  @Input("texto") texto = "";

  constructor() { }

  ngOnInit() {
  }

}
