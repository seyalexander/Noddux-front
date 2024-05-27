import { Observable } from "rxjs";
import { documentoVentaImpresionesModel } from "../documentoVentaImpresiones.model";

export abstract class documentosVentaImpresionesGateway {
  abstract getAllDocumentosVentaImpresiones(): Observable<Array<documentoVentaImpresionesModel>>
}
