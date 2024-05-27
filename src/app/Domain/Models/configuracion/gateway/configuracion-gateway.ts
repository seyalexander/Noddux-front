import { Observable } from "rxjs";
import { configuracionModel } from "../configuracion.model";

export abstract class configuracionGateway {
  abstract getAllConfiguracion(): Observable<Array<configuracionModel>>
}
