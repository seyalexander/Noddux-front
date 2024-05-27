export class documentoVentaImpresionesModel {
  nombreempresa: string
  numeroruc: string
  numtelefono: string
  direccion: string
  Departamento: string
  Provincia: string
  Distrito: string
  Web: string
  Fechaemision: string
  Horaemision: string
  Serienumero: string
  Montoenletras: string
  Importepagado: string
  vuelto: string
  cajero: string
  rucdnicliente: string
  nombredlc: string
  direcccioncliente : string
  pie1: string
  pie2: string
  pie3: string
  pie4: string
  pie5: string

  constructor (
    nombreempresa: string,
    numeroruc: string,
    numtelefono: string,
    direccion: string,
    Departamento: string,
    Provincia: string,
    Distrito: string,
    Web: string,
    Fechaemision: string,
    Horaemision: string,
    Serienumero: string,
    Montoenletras: string,
    Importepagado: string,
    vuelto: string,
    cajero: string,
    rucdnicliente: string,
    nombredlc: string ,
    direcccioncliente : string,
    pie1: string,
    pie2: string,
    pie3: string,
    pie4: string,
    pie5: string,
  ) {
    this.nombreempresa = nombreempresa
    this.numeroruc = numeroruc
    this.numtelefono = numtelefono
    this.direccion = direccion
    this.Departamento = Departamento
    this.Provincia = Provincia
    this.Distrito = Distrito
    this.Web = Web
    this.Fechaemision = Fechaemision
    this.Horaemision = Horaemision
    this.Serienumero = Serienumero
    this.Montoenletras = Montoenletras
    this.Importepagado = Importepagado
    this.vuelto = vuelto
    this.cajero = cajero
    this.rucdnicliente = rucdnicliente
    this.nombredlc = nombredlc
    this.direcccioncliente = direcccioncliente
    this.pie1 = pie1
    this.pie2 = pie2
    this.pie3 = pie3
    this.pie4 = pie4
    this.pie5 = pie5
  }
}
