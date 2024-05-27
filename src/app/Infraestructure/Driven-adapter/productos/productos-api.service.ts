import { Injectable } from '@angular/core';
import { productosGateway } from '../../../Domain/Models/productos/maestro/gateway/productos-gateway';
import { Observable } from 'rxjs';
import { productoResponseBusquedaModel } from '../../../Domain/Models/productos/intercambios/response/producto-response-busqueda.model';
import { productoResponseUnionBusquedaModel } from '../../../Domain/Models/productos/intercambios/response/producto-response-unionesBusqeudas.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosApiService  {

  // extends productosGateway

  // override getAllProductosResponseUnionBusqueda(): Observable<productoResponseUnionBusquedaModel[]> {}

  // override getAllProductoResponsebusqueda(): Observable<productoResponseBusquedaModel[]> {}

  // override Validastockarticulo(codarticulo: number, cantidad: number, codalmacen: number, codestacion: number): Observable<number> {}

  // override vendersinstock(): Observable<boolean> {}

  // override getCodigoCodTerminalProductos(CodigoArticulo: string, CodigoTerminal: number): Observable<string[]> {}

  constructor() {
    //super();
  }

}
