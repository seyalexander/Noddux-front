import { Component } from '@angular/core';
import { ButtonTecladoVirtualComponent } from '../../buttons/button-teclado-virtual/button-teclado-virtual.component';

@Component({
  selector: 'app-teclado-numerico',
  standalone: true,
  imports: [
    ButtonTecladoVirtualComponent
  ],
  templateUrl: './teclado-numerico.component.html',
  styleUrl: './teclado-numerico.component.css'
})
export class TecladoNumericoComponent {

  opciones: {
    valores: Array<any>
  } = {
    valores: []
  }

  ngOnInit(): void {
    this.opciones.valores = [
      {
        valores: [
          {
            name: '1',
            value: 1,
            icon: '',
            clase: ''
          },
          {
            name: '2',
            value: 2,
            icon: '',
            clase: ''
          },
          {
            name: '3',
            value: 3,
            icon: '',
            clase: ''
          },
        ]
      },
      {
        valores: [
          {
            name: '4',
            value: 4,
            icon: '',
            clase: ''
          },
          {
            name: '5',
            value: 5,
            icon: '',
            clase: ''
          },
          {
            name: '6',
            value: 6,
            icon: '',
            clase: ''
          },
        ]
      },
      {
        valores: [
          {
            name: '7',
            value: 7,
            icon: '',
            clase: ''
          },
          {
            name: '8',
            value: 8,
            icon: '',
            clase: ''
          },
          {
            name: '9',
            value: 9,
            icon: '',
            clase: ''
          },
        ]
      },
      {
        valores: [
          {
            name: '',
            value: 1,
            icon: 'uil uil-cancel',
            clase: 'not-icon'
          },
          {
            name: '0',
            value: 0,
            icon: '',
            clase: ''
          },
          {
            name: '.',
            value: '.',
            icon: '',
            clase: ''
          },
        ]
      },




    ]
  }

}
