//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular() {
    //DATOS FINANCIEROS
    let ingresos = recuperarFloat("txtIngresos");
    let egresos = recuperarFloat("txtEgresos");

    let disponible = calcularDisponible(ingresos, egresos);
    document.getElementById("spnDisponible").textContent = "USD " + disponible.toFixed(2);

    let capacidadPago = calcularCapacidadPago(disponible);
    document.getElementById("spnCapacidadPago").textContent = "USD " + capacidadPago.toFixed(2);

    //SOLICITUD DE CREDITO
    let monto = recuperarFloat("txtMonto");
    let plazoAños = recuperarFloat("txtPlazo");
    let tasa = recuperarFloat("txtTasaInteres");

    let interes = calcularInteresSimple(monto, tasa, plazoAños);
    document.getElementById("spnInteresPagar").textContent = interes.toFixed(2);

     let total = calcularTotalPagar(monto, interes);
    document.getElementById("spnTotalPrestamo").textContent = total.toFixed(2);

    let cuotaMensual = calcularCuotaMensual(total, plazoAños);
    document.getElementById("spnCuotaMensual").textContent = cuotaMensual.toFixed(2);

    //APROBACIÓN CRÉDITO
    let aprobado = aprobarCredito(capacidadPago, cuotaMensual);
    let spnEstadoCredito = document.getElementById("spnEstadoCredito");

    if (aprobado) {
        spnEstadoCredito.textContent = "CREDITO APROBADO";
    } else {
        spnEstadoCredito.textContent = "CREDITO RECHAZADO";
    }

}