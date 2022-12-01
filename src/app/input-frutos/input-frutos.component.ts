import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fruto } from '../lista-frutos/frutos';

@Component({
  selector: 'app-input-frutos',
  templateUrl: './input-frutos.component.html',
  styleUrls: ['./input-frutos.component.scss']
})
export class InputFrutosComponent implements OnInit {

  constructor() { }

  @Input()
  cantidad!: number;


  @Input()
  maximo!: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }
  upCantidad(): void {
    if(this.cantidad < this.maximo)
    this.cantidad++;
    this.cantidadChange.emit(this.cantidad);

  }
  downCantidad(): void {
    if(this.cantidad>0)
    this.cantidad--;
    this.cantidadChange.emit(this.cantidad);
  };
  chequeoCantidadFrutos(){
    if(this.cantidad > this.maximo) {
      alert("No hay suficientes frutos en stock");
      this.cantidadChange.emit(this.cantidad);
    }
    if(this.cantidad < 0) {
      alert("No se pueden encargar cantidades negativas ");
    }
    this.cantidad = 0;
  }
}
