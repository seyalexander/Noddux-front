import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-items-listado-vender',
  standalone: true,
  imports: [],
  templateUrl: './button-items-listado-vender.component.html',
  styleUrl: './button-items-listado-vender.component.css'
})
export class ButtonItemsListadoVenderComponent {
  @Input() icono: string = ''
}
