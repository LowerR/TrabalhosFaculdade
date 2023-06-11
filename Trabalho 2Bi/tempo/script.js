let date = document.querySelector('#date');
let date2 = document.querySelector('#date2');
let calcular = document.querySelector('#calcular');
let resultado = document.querySelector('#resultado');


function calcularData () {
    let dia = Number(date.value);
    let mes = Number(date2.value);
    anoAtual = new Date().getFullYear();
    let diasMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let totalDias = 0;
    for (let i = 0; i < mes -1; i++) {
        totalDias += diasMes[i];
    }

    totalDias += dia;

    resultado.innerHTML=('Se passaram' + ' ' + totalDias + ' ' + 'Dias!!')
}

calcular.onclick = function () {
    calcularData();
}