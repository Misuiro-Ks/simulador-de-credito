//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular() {
    if (!validarFormulario()) {
        return;
    }
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

function validarFormulario() {
    let formularioValido = true;

    let campos = [
        { input: "txtIngresos", error: "errIngresos" },
        { input: "txtEgresos", error: "errEgresos" },
        { input: "txtMonto", error: "errMonto" },
        { input: "txtPlazo", error: "errPlazo" },
        { input: "txtTasaInteres", error: "errTasaInteres" }
    ];

    for (let i = 0; i < campos.length; i++) {
        let valorTexto = recuperarTexto(campos[i].input);
        let valorSinFormato = quitarComas(valorTexto);
        limpiarError(campos[i].error);

        if (estaVacio(valorSinFormato)) {
            mostrarError(campos[i].error, "Este campo no puede estar vacío");
            formularioValido = false;
        } else if (!esNumero(valorSinFormato)) {
            mostrarError(campos[i].error, "Solo se permiten números");
            formularioValido = false;
        }
    }

    // Validación especial: monto (rango 5000 - 20000)
    let valorMontoTexto = quitarComas(recuperarTexto("txtMonto"));
    if (!estaVacio(valorMontoTexto) && esNumero(valorMontoTexto)) {
        let monto = recuperarFloat("txtMonto");
        if (!montoEnRango(monto)) {
            mostrarError("errMonto", "El monto debe estar entre USD 5000 y USD 20000");
            formularioValido = false;
        }
    }

    // Validación especial: plazo (entre 1 y 5 años)
    let valorPlazoTexto = quitarComas(recuperarTexto("txtPlazo"));
    if (!estaVacio(valorPlazoTexto) && esNumero(valorPlazoTexto)) {
        let plazo = recuperarFloat("txtPlazo");
        if (!plazoEsValido(plazo)) {
            mostrarError("errPlazo", "El plazo debe estar entre 1 y 5 años");
            formularioValido = false;
        }
    }

    // Validación especial: tasa de interés (entre 1% y 30%)
    let valorTasaTexto = quitarComas(recuperarTexto("txtTasaInteres"));
    if (!estaVacio(valorTasaTexto) && esNumero(valorTasaTexto)) {
        let tasa = recuperarFloat("txtTasaInteres");
        if (!tasaEnRango(tasa)) {
            mostrarError("errTasaInteres", "La tasa debe estar entre 1% y 30%");
            formularioValido = false;
        }
    }

    // Validación especial: ingresos deben ser mayores a egresos
    let valorIngresosTexto = quitarComas(recuperarTexto("txtIngresos"));
    let valorEgresosTexto = quitarComas(recuperarTexto("txtEgresos"));
    if (!estaVacio(valorIngresosTexto) && esNumero(valorIngresosTexto) &&
        !estaVacio(valorEgresosTexto) && esNumero(valorEgresosTexto)) {
        let ingresos = recuperarFloat("txtIngresos");
        let egresos = recuperarFloat("txtEgresos");
        if (!capacidadPagoPositiva(ingresos, egresos)) {
            mostrarError("errEgresos", "Los ingresos deben ser mayores a los egresos");
            formularioValido = false;
        }
    }

    return formularioValido;
}

function reiniciar() {
    document.getElementById("txtIngresos").value = "";
    document.getElementById("txtEgresos").value = "";
    document.getElementById("txtMonto").value = "";
    document.getElementById("txtPlazo").value = "";
    document.getElementById("txtTasaInteres").value = "";

    document.getElementById("spnDisponible").textContent = "";
    document.getElementById("spnCapacidadPago").textContent = "";
    document.getElementById("spnInteresPagar").textContent = "";
    document.getElementById("spnTotalPrestamo").textContent = "";
    document.getElementById("spnCuotaMensual").textContent = "";
    document.getElementById("spnEstadoCredito").textContent = "ANALIZANDO...";

    limpiarError("errIngresos");
    limpiarError("errEgresos");
    limpiarError("errMonto");
    limpiarError("errPlazo");
    limpiarError("errTasaInteres");
}