import { Component, OnInit } from '@angular/core';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  valorItem! : string;
  constructor(private service: ListaDeCompraService) { }

  ngOnInit(): void { }

  adicionarItem(){
    this.service.adicionarNaLista(this.valorItem);
    this.limparCampo();
  }

  limparCampo(){
    this.valorItem = ''
  }
}
