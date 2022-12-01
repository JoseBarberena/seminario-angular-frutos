import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaFrutosComponent } from './lista-frutos/lista-frutos.component';
import { FrutosAboutComponent } from './frutos-about/frutos-about.component';
import { FrutosSecosComponent } from './frutos-secos/frutos-secos.component';
import { FrutosCarritoComponent } from './frutos-carrito/frutos-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaFrutosComponent,
    FrutosAboutComponent,
    FrutosSecosComponent,
    FrutosCarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
