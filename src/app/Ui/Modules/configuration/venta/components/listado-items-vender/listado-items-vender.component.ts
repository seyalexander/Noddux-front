import { Component } from '@angular/core';
import { ItemsListadoItemsVenderComponent } from '../items-listado-items-vender/items-listado-items-vender.component';

@Component({
  selector: 'app-listado-items-vender',
  standalone: true,
  imports: [ItemsListadoItemsVenderComponent],
  templateUrl: './listado-items-vender.component.html',
  styleUrl: './listado-items-vender.component.css'
})
export class ListadoItemsVenderComponent {
  listaItems: Array <string> = [
    '.','.','.','.','.','.','.','.','.','.',
    '.','.','.','.','.','.','.','.','.','.',
    '.','.','.','.','.','.','.','.','.','.',
    '.','.','.','.','.','.','.','.','.','.',
  ]
}
