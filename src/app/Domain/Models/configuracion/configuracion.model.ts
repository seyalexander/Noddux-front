export class configuracionModel {
  CodigoConfiguracion: string
  ValorTexto: string
  ValorNumerico: number
  ValorBooleano: boolean
  ValorEntero: number
  FechaTurno: string
  CodigoTurno: string

  constructor (
    CodigoConfiguracion: string,
    ValorTexto: string,
    ValorNumerico: number,
    ValorBooleano: boolean,
    ValorEntero: number ,
    FechaTurno: string,
    CodigoTurno: string,
  ) {
    this.CodigoConfiguracion = CodigoConfiguracion,
    this.ValorTexto = ValorTexto
    this.ValorNumerico = ValorNumerico
    this.ValorBooleano = ValorBooleano
    this.ValorEntero = ValorEntero
    this.FechaTurno = FechaTurno
    this.CodigoTurno = CodigoTurno
  }
}
