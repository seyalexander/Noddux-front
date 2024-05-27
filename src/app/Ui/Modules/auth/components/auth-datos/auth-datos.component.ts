import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from '../../../../Shared/components/buttons/button/button.component';

@Component({
  selector: 'app-auth-datos',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ButtonComponent,
  ],
  templateUrl: './auth-datos.component.html',
  styleUrl: './auth-datos.component.css'
})
export class AuthDatosComponent {

}
