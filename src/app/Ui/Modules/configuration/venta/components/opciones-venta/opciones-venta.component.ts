import { Component } from '@angular/core';
import { TecladoNumericoComponent } from '../../../../../Shared/components/teclados-Virtuales/teclado-numerico/teclado-numerico.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-opciones-venta',
  standalone: true,
  imports: [
    TecladoNumericoComponent,
    MatButtonModule
  ],
  templateUrl: './opciones-venta.component.html',
  styleUrl: './opciones-venta.component.css'
})
export class OpcionesVentaComponent {

}
