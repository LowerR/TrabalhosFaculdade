let cavalos = document.querySelector('#cavalos');
let calcular = document.querySelector('#calcular');
let resultado = document.querySelector('#resultado');

function calcularCavalos () {
    let numCavalos = Number(cavalos.value);

    resultado.innerHTML=(numCavalos * 4 + ' ' + 'Ferraduras');

}

calcular.onclick = function () {
    calcularCavalos();
}