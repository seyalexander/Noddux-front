import { Component } from '@angular/core';
import { ListaProductosPagesComponent } from '../../../productos/pages/lista-productos-pages/lista-productos-pages.component';
import { ListadoItemsVenderComponent } from '../../components/listado-items-vender/listado-items-vender.component';
import { OpcionesVentaComponent } from '../../components/opciones-venta/opciones-venta.component';
import { TotalItemsVenderComponent } from '../../components/total-items-vender/total-items-vender.component';

@Component({
  selector: 'app-apartado-venta',
  standalone: true,
  imports: [
    ListaProductosPagesComponent,
    ListadoItemsVenderComponent,
    OpcionesVentaComponent,
    TotalItemsVenderComponent
  ],
  templateUrl: './apartado-venta.component.html',
  styleUrl: './apartado-venta.component.css'
})
export class ApartadoVentaComponent {

}
