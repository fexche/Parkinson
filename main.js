
class CjaSalidaCaja{
      numeroDocumento;
      Fecha;
      MontoMonedaNac
}

let _salidacaja= new CjaSalidaCaja();

_salidacaja.numeroDocumento="1500023"
_salidacaja.Fecha=Date()
_salidacaja.MontoMonedaNac=150.00

// Agregar propiedades 
_salidacaja.Concepto="CJA006-DEPOSITO DESDE CAJA GENERAL"
// Eliminar Propiedades 
delete _salidacaja.Concepto

console.log(_salidacaja)