import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { terminalGateway } from './Domain/Models/terminal/gateway/terminal-gateway';
import { TerminalApiService } from './Infraestructure/Driven-adapter/terminal/terminal-api.service';
import { configuracionGateway } from './Domain/Models/configuracion/gateway/configuracion-gateway';
import { ConfiguracionApiService } from './Infraestructure/Driven-adapter/configuracion/configuracion-api.service';
import { productosGateway } from './Domain/Models/productos/maestro/gateway/productos-gateway';
import { ProductosApiService } from './Infraestructure/Driven-adapter/productos/productos-api.service';
import { documentosVentaImpresionesGateway } from './Domain/Models/documentoVentaImpresiones/gateway/documentoVentaImpresiones-gateway';
import { DocumentoVentaImpresionesApiService } from './Infraestructure/Driven-adapter/documentoVentaImpresiones/documento-venta-impresiones-api.service';
import { formaPagoGateway } from './Domain/Models/formaPago/gateway/formaPago-gateway';
import { FormaPagoApiService } from './Infraestructure/Driven-adapter/formaPago/forma-pago-api.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(),
    // Driven-adapter
    {provide: terminalGateway, useClass: TerminalApiService},
    {provide: configuracionGateway, useClass: ConfiguracionApiService},
    {provide: productosGateway, useClass: ProductosApiService},
    {provide: documentosVentaImpresionesGateway, useClass: DocumentoVentaImpresionesApiService},
    {provide: formaPagoGateway, useClass: FormaPagoApiService},
    // Otras-Api
    //{provide: terminalGateway, useClass: TerminalApiService},
  ],

};
