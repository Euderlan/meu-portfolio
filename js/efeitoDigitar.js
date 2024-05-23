document.addEventListener("DOMContentLoaded", function(){
    var atraso = 200
    var textoElemento = document.querySelector(".titulo-destaque")

    function getTextoAtual() {
        
        if (window.location.href.includes("project.html")) {
            return "Projetos";
        } else if (window.location.href.includes("skills.html")) {
            return "Habilidades"; 
        } else  {
            return "Euderlan Freire"; 
        }
    }
    getTextoAtual()
    var contadorDeLetras = 0
    function escreverTexto(){
        if (contadorDeLetras <  getTextoAtual().length) {
            textoElemento.textContent +=  getTextoAtual().charAt(contadorDeLetras)
            contadorDeLetras++
            setTimeout(escreverTexto, atraso)
        }
    }
    escreverTexto()
  
    
})
