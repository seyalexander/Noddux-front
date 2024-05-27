import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../Shared/layout/header/header.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home-principal-pages',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet
  ],
  templateUrl: './home-principal-pages.component.html',
  styleUrl: './home-principal-pages.component.css'
})
export class HomePrincipalPagesComponent {

}
