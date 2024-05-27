export class formaPagoModel {
  Codigo: number
  Descripcion: string
  DiasPago: number

  constructor (
    Codigo: number,
    Descripcion: string,
    DiasPago: number
  ) {
    this.Codigo = Codigo
    this.Descripcion = Descripcion
    this.DiasPago = DiasPago
  }
}
