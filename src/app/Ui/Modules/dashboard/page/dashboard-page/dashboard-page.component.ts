import { Component } from '@angular/core';
import { AuthPageComponent } from '../../../auth/page/auth-page/auth-page.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    AuthPageComponent
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

}
