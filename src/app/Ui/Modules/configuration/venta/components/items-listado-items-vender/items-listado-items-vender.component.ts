import { Component } from '@angular/core';
import { ButtonItemsListadoVenderComponent } from '../button-items-listado-vender/button-items-listado-vender.component';

@Component({
  selector: 'app-items-listado-items-vender',
  standalone: true,
  imports: [ButtonItemsListadoVenderComponent],
  templateUrl: './items-listado-items-vender.component.html',
  styleUrl: './items-listado-items-vender.component.css'
})
export class ItemsListadoItemsVenderComponent {

  // Iconos
  iconoRestar: string = 'uil uil-minus'
  iconoSumar: string = 'uil uil-plus'
  iconoCancelar: string = 'uil uil-times'


}
