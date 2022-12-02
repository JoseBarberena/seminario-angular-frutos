import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { FrutosCartService } from '../frutos-cart.service';
import { Fruto } from '../lista-frutos/frutos';

@Component({
  selector: 'app-frutos-carrito',
  templateUrl: './frutos-carrito.component.html',
  styleUrls: ['./frutos-carrito.component.scss']
})
export class FrutosCarritoComponent implements OnInit {

  cartList!: Fruto[];
  constructor(private cart: FrutosCartService) {
    cart.cartList.subscribe(c => this.cartList = c);
  }

  ngOnInit(): void {
  }

}
