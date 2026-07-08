//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

function calcularDisponible(ingresos, egresos) {
    let disponible = ingresos - egresos;

    if (disponible < 0) {
        disponible = 0;
    }

    return disponible;
}

function calcularCapacidadPago(montoDisponible) {
    let capacidadPago = montoDisponible * 0.5;

    return capacidadPago;
}

function calcularInteresSimple(monto, tasa, plazoAños) {
    let interes = plazoAños * monto * (tasa / 100);

    return interes;
}

function calcularTotalPagar(monto, interes) {
    const IMPUESTOS_SOLCA = 100;

    let total = monto + interes + IMPUESTOS_SOLCA;

    return total;
}

function calcularCuotaMensual(total, plazoAños) {
    let plazoMeses = plazoAños * 12;
    let cuotaMensual = total / plazoMeses;

    return cuotaMensual;
}

function aprobarCredito(capacidadPago, cuotaMensual) {
    if (capacidadPago > cuotaMensual) {
        return true;
    } else {
        return false;
    }
}

