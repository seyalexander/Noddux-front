import { Observable } from "rxjs";
import { formaPagoModel } from "../formaPago.model";

export abstract class formaPagoGateway {
  abstract getAllFormaPago(): Observable<Array<formaPagoModel>>
}
