import { Observable } from "rxjs";
import { productoResponseUnionBusquedaModel } from "../../intercambios/response/producto-response-unionesBusqeudas.model";
import { productoResponseBusquedaModel } from "../../intercambios/response/producto-response-busqueda.model";

export abstract class productosGateway {
  abstract getAllProductosResponseUnionBusqueda(): Observable <Array<productoResponseUnionBusquedaModel>>
  abstract getAllProductoResponsebusqueda(): Observable<Array<productoResponseBusquedaModel>>
  abstract Validastockarticulo(codarticulo: number, cantidad: number, codalmacen: number, codestacion: number): Observable<number>
  abstract vendersinstock(): Observable<boolean>
  abstract getCodigoCodTerminalProductos(CodigoArticulo: string, CodigoTerminal: number ): Observable<Array<string>>
}
