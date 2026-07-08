function recuperarTexto(idComponente) {
    let componente = document.getElementById(idComponente);
    let valor = componente.value;

    return valor;
}

function recuperarFloat(idComponente) {
    let valorTexto = recuperarTexto(idComponente);
    let valorSinComas = quitarComas(valorTexto);
    let valorFloat = parseFloat(valorSinComas);

    return valorFloat;
}

function estaVacio(valor) {
    if (valor === "" || valor === null) {
        return true;
    } else {
        return false;
    }
}

function esNumero(valor) {
    if (isNaN(valor) || valor === "") {
        return false;
    } else {
        return true;
    }
}

function mostrarError(idError, mensaje) {
    let elementoError = document.getElementById(idError);
    elementoError.textContent = mensaje;
}

function limpiarError(idError) {
    let elementoError = document.getElementById(idError);
    elementoError.textContent = "";
}

function formatearNumero(idComponente) {
    let componente = document.getElementById(idComponente);
    let valor = componente.value;

    let valorLimpio = valor.replace(/[^0-9.]/g, "");

    if (valorLimpio === "") {
        componente.value = "";
        return;
    }

    let partes = valorLimpio.split(".");
    let parteEntera = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let parteDecimal = partes[1];

    if (parteDecimal !== undefined) {
        componente.value = parteEntera + "." + parteDecimal;
    } else {
        componente.value = parteEntera;
    }
}

function quitarComas(valor) {
    return valor.replace(/,/g, "");
}