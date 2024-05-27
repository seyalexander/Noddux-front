import { Routes } from '@angular/router';
import { HomePrincipalPagesComponent } from './Ui/Modules/home/pages/home-principal-pages/home-principal-pages.component';
import { ApartadoVentaComponent } from './Ui/Modules/configuration/venta/pages/apartado-venta/apartado-venta.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePrincipalPagesComponent,
    children: [
      {
        path: '',
        component: ApartadoVentaComponent,
        outlet: 'home'
      }
    ]
  }
];
