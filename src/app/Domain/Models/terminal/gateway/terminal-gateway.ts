import { Observable } from "rxjs";
import { terminalModel } from "../terminal.model";

export abstract class terminalGateway {
  abstract getAllterminal(): Observable<Array<terminalModel>>
}
