const calcular = () => {
    //"1+100+20+9"
    const formulainput = document.getElementById("formula").value;
    const arregloConNumeros = formulainput.split("+")

    let total = 0;
    for (let indice = 0; indice < arregloConNumeros.length; indice++) {
        total = Number(arregloConNumeros[indice]) + total;
    }
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "<p>el resultado es <stronge>" + total + "</stronge></p>"
}
