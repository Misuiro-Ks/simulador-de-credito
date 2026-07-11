//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

function calcularDisponible(ingresos, egresos) {
    let disponible = ingresos - egresos;

    if (disponible < 0) {
        disponible = 0;
    }

    return disponible;
}

function calcularCapacidadPago(montoDisponible) {
    let capacidadPago = montoDisponible * 0.3;

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

function montoEnRango(monto) {
    const MONTO_MINIMO = 5000;
    const MONTO_MAXIMO = 20000;

    if (monto >= MONTO_MINIMO && monto <= MONTO_MAXIMO) {
        return true;
    } else {
        return false;
    }
}

function plazoEsValido(plazoAños) {
    const PLAZO_MINIMO = 1;
    const PLAZO_MAXIMO = 5;

    if (plazoAños >= PLAZO_MINIMO && plazoAños <= PLAZO_MAXIMO) {
        return true;
    } else {
        return false;
    }
}

function tasaEnRango(tasa) {
    const TASA_MINIMA = 1;
    const TASA_MAXIMA = 30;

    if (tasa >= TASA_MINIMA && tasa <= TASA_MAXIMA) {
        return true;
    } else {
        return false;
    }
}

function capacidadPagoPositiva(ingresos, egresos) {
    if (ingresos > egresos) {
        return true;
    } else {
        return false;
    }
}

