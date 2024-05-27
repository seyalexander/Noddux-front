import { Component } from '@angular/core';
import { AuthDatosComponent } from '../../components/auth-datos/auth-datos.component';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [
    AuthDatosComponent
  ],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent {

}
