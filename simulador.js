//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular() {
    //DATOS FINANCIEROS
    let ingresos = recuperarFloat("txtIngresos");
    let egresos = recuperarFloat("txtEgresos");

    let disponible = calcularDisponible(ingresos, egresos);
    document.getElementById("spnDisponible").textContent = "USD " + disponible.toFixed(2);

    let capacidadPago = calcularCapacidadPago(disponible);
    document.getElementById("spnCapacidadPago").textContent = "USD " + capacidadPago.toFixed(2);

    let monto = recuperarFloat("txtMonto");
    let plazoAños = recuperarFloat("txtPlazo");
    let tasa = recuperarFloat("txtTasaInteres");

    let interes = calcularInteresSimple(monto, tasa, plazoAños);
    document.getElementById("spnInteresPagar").textContent = interes.toFixed(2);

     let total = calcularTotalPagar(monto, interes);
    document.getElementById("spnTotalPrestamo").textContent = total.toFixed(2);

}