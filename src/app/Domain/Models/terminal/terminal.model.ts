export class terminalModel {
  CodigoTerminal: string
  CodigoTurno: string
  FechaTurno: string
  NumSerie: number
  CodigoEstacion: number

  constructor(
    CodigoTerminal: string,
    CodigoTurno: string,
    FechaTurno: string,
    NumSerie: number,
    CodigoEstacion: number
   ) {
    this.CodigoTerminal= CodigoTerminal
    this.CodigoTurno = CodigoTurno
    this.FechaTurno = FechaTurno
    this.NumSerie = NumSerie
    this.CodigoEstacion = CodigoEstacion
  }
}
