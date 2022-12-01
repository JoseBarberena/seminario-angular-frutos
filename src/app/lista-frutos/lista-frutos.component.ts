import { Component, OnInit } from '@angular/core';
import { Fruto } from './frutos';


@Component({
  selector: 'app-lista-frutos',
  templateUrl: './lista-frutos.component.html',
  styleUrls: ['./lista-frutos.component.scss']
})
export class ListaFrutosComponent implements OnInit {

  frutos : Fruto [] = [
    {
      "detalle":"Castañas de Caju",
      "stock":10,
      "precio":2600,
      "preciopromo":3200,
      "imagen": "assets/img/pecan.jpeg",
      "promocion": true,
      "cantidad": 0,
    },
    {
      "detalle":"Castañas de Caju",
      "stock":5,
      "precio":2600,
      "preciopromo":3200,
      "imagen": "assets/img/pecan.jpeg",
      "promocion": false,
      "cantidad": 0,
    },
    {
      "detalle":"Castañas de Caju",
      "stock":50,
      "precio":2600,
      "preciopromo":3200,
      "imagen": "assets/img/pecan.jpeg",
      "promocion": false,
      "cantidad": 0,

    },
    {
      "detalle":"Castañas de Caju",
      "stock":0,
      "precio":2600,
      "imagen": "assets/img/pecan.jpeg",
      "promocion": true,
      "preciopromo":3200,
      "cantidad": 0,

    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  upCantidad(frutos: Fruto): void {
    if(frutos.cantidad < frutos.stock)
    frutos.cantidad++;

  }
  downCantidad(frutos: Fruto): void {
    if(frutos.cantidad>0)
    frutos.cantidad--;
  };
  chequeoCantidadFrutos(frutos: Fruto){
    if(frutos.cantidad > frutos.stock) {
      alert("No hay suficientes frutos en stock");
    }
    if(frutos.cantidad < 0) {
      alert("No se pueden encargar cantidades negativas ");
    }
    frutos.cantidad = 0;
  }



}
