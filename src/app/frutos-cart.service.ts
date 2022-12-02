import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Fruto } from './lista-frutos/frutos';

@Injectable({
  providedIn: 'root'
})

//Maneja la logica del carrito
export class FrutosCartService {


 private _cartList: Fruto[] = [];
  cartList: BehaviorSubject<Fruto[]> =new BehaviorSubject(this._cartList);

 constructor() { }

  addToCart(frutos: Fruto) {

    let item: Fruto = this._cartList.find((v1) => v1.detalle == frutos.detalle)!;
    if(!item) {
      this._cartList.push({... frutos});
    } else {
      item.cantidad += frutos.cantidad;
    }

    console.log(this._cartList);
    this.cartList.next(this._cartList);


  }


}
