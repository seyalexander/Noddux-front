import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button-teclado-virtual',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './button-teclado-virtual.component.html',
  styleUrl: './button-teclado-virtual.component.css'
})
export class ButtonTecladoVirtualComponent {
  @Input() descripcion: string = ''
  @Input() valor: number = 0
  @Input() icono: string = ''
  @Input() claseIcono: string = ''
}
