export class productosModel {
  CodArticulo: number
  NombreArticulo: string
  CuentaCompra: number
  CuentaVenta: number
  NombreCorto: string
  CodEstacion: number
  CodFamilia: number
  CodUnidad: number
  TipoMoneda: string
  PrecioPublico: number
  PrecioSinIGV: number
  CostoArticulo: number
  ISC: number
  IGV: number
  StockMinimo: number
  StockMaximo: number
  CodBarra: string
  CodPlu: string
  Stock: number
  CodBarraAd: string
  FechaUSalida: string
  FechaUIngreso: string
  CostoPromedio: number
  PuntosFidelidad: number
  CostoAdicionalFidelidad: number
  StockUInventario: number
  IngresoDUInventario: number
  SalidasDUInventario: number
  Estado: string
  UsuarioCreador: string
  FechaCreacion: string
  UsuarioModificador: string
  FechaModificacion: string
  CodSubFamilia: number
  ControlStock: string
  TipoKit: string
  FechaExpiracion: string
  Procedencia: string
  Ubicacion: number
  PorcentajeUtilidad: number
  Foto: string
  TipoMonedaCosto: string
  PrecioPublico2: number
  PrecioPublico3: number
  StockM: number
  CodArtNue: string
  Inicial: number
  Talla: string
  StockInicial: number
  Comision: number
  Comentario: string
  GastosAdministrativos: number
  OtrosGastos: number
  Peso: number
  Grosor: number
  PrecioGramo: number
  CodAlmacen: number
  Serie: string
  ConPromocion: boolean
  TipoVenta: string
  Perecible: string
  CodBarra2: string
  ControlPeso: string
  Percepcion: string
  TipoCalculoPrecio: string
  GarantiaDias: number
  Canjepuntos: number
  SolesCanje: number
  Articanje: boolean
  ModaLinea: boolean
  PrecioTalla:boolean
  Marca: string
  Importado:boolean
  Transferible:boolean
  CostoIgv: number
  Insumo: boolean
  Autor: string
  Editorial: string
  Express:boolean
  Carta:boolean
  PermitirC: number
  PermitirV: number
  CostoPactado: number
  CodProveedorPrincipal: number
  FechaAnulacion: string
  Imagen: string
  CodClasificacion: number
  CodigoSAP: string
  TipoExistencia: string
  TouchResumen:boolean
  Web1: string
  Web2: string
  CodTipoEmpaque: number
  DescuentoPorcentaje: number
  ESTADOENVIOWS: number
  IGVCostoProv: number
  TipoIgv: number
  ImprimirComanda:boolean
  CodigoSunat: string
  Cortesia:boolean
  CodCuenta: string
  CodProyecto: string
  ICBPER:boolean
  NotaDebito:boolean
  NotaCredito:boolean

  constructor(
    CodArticulo: number,
    NombreArticulo: string,
    CuentaCompra: number,
    CuentaVenta: number,
    NombreCorto: string,
    CodEstacion: number,
    CodFamilia: number,
    CodUnidad: number,
    TipoMoneda: string,
    PrecioPublico: number,
    PrecioSinIGV: number,
    CostoArticulo: number,
    ISC: number,
    IGV: number,
    StockMinimo: number,
    StockMaximo: number,
    CodBarra: string,
    CodPlu: string,
    Stock: number,
    CodBarraAd: string,
    FechaUSalida: string,
    FechaUIngreso: string,
    CostoPromedio: number,
    PuntosFidelidad: number,
    CostoAdicionalFidelidad: number,
    StockUInventario: number,
    IngresoDUInventario: number,
    SalidasDUInventario: number,
    Estado: string,
    UsuarioCreador: string,
    FechaCreacion: string,
    UsuarioModificador: string,
    FechaModificacion: string,
    CodSubFamilia: number,
    ControlStock: string,
    TipoKit: string,
    FechaExpiracion: string,
    Procedencia: string,
    Ubicacion: number,
    PorcentajeUtilidad: number,
    Foto: string,
    TipoMonedaCosto: string,
    PrecioPublico2: number,
    PrecioPublico3: number,
    StockM: number,
    CodArtNue: string,
    Inicial: number,
    Talla: string,
    StockInicial: number,
    Comision: number,
    Comentario: string,
    GastosAdministrativos: number,
    OtrosGastos: number,
    Peso: number,
    Grosor: number,
    PrecioGramo: number,
    CodAlmacen: number,
    Serie: string,
    ConPromocion: boolean,
    TipoVenta: string,
    Perecible: string,
    CodBarra2: string,
    ControlPeso: string,
    Percepcion: string,
    TipoCalculoPrecio: string,
    GarantiaDias: number,
    Canjepuntos: number,
    SolesCanje: number,
    Articanje: boolean,
    ModaLinea: boolean,
    PrecioTalla:boolean,
    Marca: string,
    Importado:boolean,
    Transferible:boolean,
    CostoIgv: number,
    Insumo: boolean,
    Autor: string,
    Editorial: string,
    Express:boolean,
    Carta:boolean,
    PermitirC: number,
    PermitirV: number,
    CostoPactado: number,
    CodProveedorPrincipal: number,
    FechaAnulacion: string,
    Imagen: string,
    CodClasificacion: number,
    CodigoSAP: string,
    TipoExistencia: string,
    TouchResumen:boolean,
    Web1: string,
    Web2: string,
    CodTipoEmpaque: number,
    DescuentoPorcentaje: number,
    ESTADOENVIOWS: number,
    IGVCostoProv: number,
    TipoIgv: number,
    ImprimirComanda:boolean,
    CodigoSunat: string,
    Cortesia:boolean,
    CodCuenta: string,
    CodProyecto: string,
    ICBPER:boolean,
    NotaDebito:boolean,
    NotaCredito:boolean
  ) {
    this.CodArticulo = CodArticulo,
    this.NombreArticulo = NombreArticulo,
    this.CuentaCompra = CuentaCompra,
    this.CuentaVenta = CuentaVenta,
    this.NombreCorto = NombreCorto,
    this.CodEstacion = CodEstacion,
    this.CodFamilia = CodFamilia,
    this.CodUnidad = CodUnidad,
    this.TipoMoneda = TipoMoneda,
    this.PrecioPublico = PrecioPublico,
    this.PrecioSinIGV = PrecioSinIGV,
    this.CostoArticulo = CostoArticulo,
    this.ISC = ISC,
    this.IGV = IGV,
    this.StockMinimo = StockMinimo,
    this.StockMaximo = StockMaximo,
    this.CodBarra = CodBarra,
    this.CodPlu = CodPlu,
    this.Stock = Stock,
    this.CodBarraAd = CodBarraAd,
    this.FechaUSalida = FechaUSalida,
    this.FechaUIngreso = FechaUIngreso,
    this.CostoPromedio = CostoPromedio,
    this.PuntosFidelidad = PuntosFidelidad,
    this.CostoAdicionalFidelidad = CostoAdicionalFidelidad,
    this.StockUInventario = StockUInventario,
    this.IngresoDUInventario = IngresoDUInventario,
    this.SalidasDUInventario = SalidasDUInventario,
    this.Estado = Estado,
    this.UsuarioCreador = UsuarioCreador,
    this.FechaCreacion = FechaCreacion,
    this.UsuarioModificador = UsuarioModificador,
    this.FechaModificacion = FechaModificacion,
    this.CodSubFamilia = CodSubFamilia,
    this.ControlStock = ControlStock,
    this.TipoKit = TipoKit,
    this.FechaExpiracion = FechaExpiracion,
    this.Procedencia = Procedencia,
    this.Ubicacion = Ubicacion,
    this.PorcentajeUtilidad = PorcentajeUtilidad,
    this.Foto = Foto,
    this.TipoMonedaCosto = TipoMonedaCosto,
    this.PrecioPublico2 = PrecioPublico2,
    this.PrecioPublico3 = PrecioPublico3,
    this.StockM = StockM,
    this.CodArtNue = CodArtNue,
    this.Inicial = Inicial,
    this.Talla = Talla,
    this.StockInicial = StockInicial,
    this.Comision = Comision,
    this.Comentario = Comentario,
    this.GastosAdministrativos = GastosAdministrativos,
    this.OtrosGastos = OtrosGastos,
    this.Peso = Peso,
    this.Grosor = Grosor,
    this.PrecioGramo = PrecioGramo,
    this.CodAlmacen = CodAlmacen,
    this.Serie = Serie,
    this.ConPromocion = ConPromocion,
    this.TipoVenta = TipoVenta,
    this.Perecible = Perecible,
    this.CodBarra2 = CodBarra2,
    this.ControlPeso = ControlPeso,
    this.Percepcion = Percepcion,
    this.TipoCalculoPrecio = TipoCalculoPrecio,
    this.GarantiaDias = GarantiaDias,
    this.Canjepuntos = Canjepuntos,
    this.SolesCanje = SolesCanje,
    this.Articanje = Articanje,
    this.ModaLinea = ModaLinea,
    this.PrecioTalla = PrecioTalla,
    this.Marca = Marca,
    this.Importado = Importado,
    this.Transferible = Transferible,
    this.CostoIgv = CostoIgv,
    this.Insumo = Insumo,
    this.Autor = Autor,
    this.Editorial = Editorial,
    this.Express = Express,
    this.Carta = Carta,
    this.PermitirC = PermitirC,
    this.PermitirV = PermitirV,
    this.CostoPactado = CostoPactado,
    this.CodProveedorPrincipal = CodProveedorPrincipal,
    this.FechaAnulacion = FechaAnulacion,
    this.Imagen = Imagen,
    this.CodClasificacion = CodClasificacion,
    this.CodigoSAP = CodigoSAP,
    this.TipoExistencia = TipoExistencia,
    this.TouchResumen = TouchResumen,
    this.Web1 = Web1,
    this.Web2 = Web2,
    this.CodTipoEmpaque = CodTipoEmpaque,
    this.DescuentoPorcentaje = DescuentoPorcentaje,
    this.ESTADOENVIOWS = ESTADOENVIOWS,
    this.IGVCostoProv = IGVCostoProv,
    this.TipoIgv = TipoIgv,
    this.ImprimirComanda = ImprimirComanda,
    this.CodigoSunat = CodigoSunat,
    this.Cortesia = Cortesia,
    this.CodCuenta = CodCuenta,
    this.CodProyecto = CodProyecto,
    this.ICBPER = ICBPER,
    this.NotaDebito = NotaDebito,
    this.NotaCredito = NotaCredito
  }


}
