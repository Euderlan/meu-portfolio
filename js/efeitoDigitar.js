document.addEventListener("DOMContentLoaded", function(){
    var texto = "Euderlan Freire"
    var atraso = 200
    var textoElemento = document.querySelector(".titulo-destaque")

    var contadorDeLetras = 0
    function escreverTexto(){
        if (contadorDeLetras < texto.length) {
            textoElemento.textContent += texto.charAt(contadorDeLetras)
            contadorDeLetras++
            setTimeout(escreverTexto, atraso)
        }
    }
    escreverTexto()
})