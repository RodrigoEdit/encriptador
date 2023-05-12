function copiarContenido() {
    var textarea = document.getElementById("respuesta-text-area"); // Obtiene el elemento textarea
    textarea.select();
    textarea.setSelectionRange(0,99999);
    document.execCommand('copy');
}


function encriptar() {
    var fraseOriginal = document.getElementById("frase").value;
    var fraseEncriptada = encriptarVocales(fraseOriginal);
    document.getElementById("respuesta-text-area").value = "";
    document.getElementById("respuesta-text-area").value = fraseEncriptada;
    if (fraseOriginal === "") {
        document.getElementById("elementos-ocultos").style.display = "none";
        document.getElementById("elementos-mostrados").style.display = "flex";
    } else {
        document.getElementById("elementos-ocultos").style.display = "flex";
        document.getElementById("elementos-mostrados").style.display = "none";
    }
}

function encriptarVocales(frase) {
    frase = frase.replace(/e/g, "enter");
    frase = frase.replace(/i/g, "imes");
    frase = frase.replace(/a/g, "ai");
    frase = frase.replace(/o/g, "ober");
    frase = frase.replace(/u/g, "ufat");
    return frase;
}


function desencriptar() {
    var fraseEncriptada = document.getElementById("frase").value;
    var fraseOriginal = desencriptarVocales(fraseEncriptada);
    document.getElementById("respuesta-text-area").value = "";
    document.getElementById("respuesta-text-area").value = fraseOriginal;
    if (fraseOriginal === "") {
        document.getElementById("elementos-ocultos").style.display = "none";
        document.getElementById("elementos-mostrados").style.display = "flex";
    } else {
        document.getElementById("elementos-ocultos").style.display = "flex";
        document.getElementById("elementos-mostrados").style.display = "none";
    }
    
}

function desencriptarVocales(frase) {
    frase = frase.replace(/enter/g, "e");
    frase = frase.replace(/imes/g, "i");
    frase = frase.replace(/ai/g, "a");
    frase = frase.replace(/ober/g, "o");
    frase = frase.replace(/ufat/g, "u");
    return frase;
}