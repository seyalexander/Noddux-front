import { Component } from '@angular/core';
import { TarjetaProductoComponentComponent } from '../../components/tarjeta-productos/tarjeta-producto-component/tarjeta-producto-component.component';

@Component({
  selector: 'app-lista-productos-pages',
  standalone: true,
  imports: [TarjetaProductoComponentComponent],
  templateUrl: './lista-productos-pages.component.html',
  styleUrl: './lista-productos-pages.component.css'
})
export class ListaProductosPagesComponent {

}
