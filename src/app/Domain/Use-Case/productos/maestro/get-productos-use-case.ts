import { Injectable } from "@angular/core";
import { productosGateway } from "../../../Models/productos/maestro/gateway/productos-gateway";
import { Observable } from "rxjs";
import { productoResponseUnionBusquedaModel } from "../../../Models/productos/intercambios/response/producto-response-unionesBusqeudas.model";
import { productoResponseBusquedaModel } from "../../../Models/productos/intercambios/response/producto-response-busqueda.model";

@Injectable({
  providedIn: 'root',
})

export class getProductosUseCase {

  constructor(private _productosGateway: productosGateway){}

  getAllProductosResponseUnionBusqueda(): Observable<Array<productoResponseUnionBusquedaModel>> {
    return this._productosGateway.getAllProductosResponseUnionBusqueda();
  }

  getAllProductoResponsebusqueda(): Observable<Array<productoResponseBusquedaModel>> {
    return this._productosGateway.getAllProductoResponsebusqueda()
  }

  Validastockarticulo(codarticulo: number, cantidad: number, codalmacen: number, codestacion: number): Observable<number> {
    return this._productosGateway.Validastockarticulo(codarticulo,cantidad,codalmacen,codestacion)
  }

  vendersinstock(): Observable<boolean> {
    return this._productosGateway.vendersinstock()
  }

  getCodigoCodTerminalProductos(CodigoArticulo: string, CodigoTerminal: number ): Observable<Array<string>> {
    return this._productosGateway.getCodigoCodTerminalProductos(CodigoArticulo, CodigoTerminal)
  }
}
