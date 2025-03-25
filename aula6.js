function converter() {
    let resultado = document.getElementById("resultado")
    let valorEmDolar = document.getElementById("Valor").value
    let dolarDodia = 5

    let valorReal = valorEmDolar * dolarDodia

    

    resultado.innerHTML = "R$" + valorReal
}

