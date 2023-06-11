let nome = document.querySelector('#name');
let yOld = document.querySelector('#yOld');
let calcular = document.querySelector('#calcular');
let resultado = document.querySelector('#resultado');
let checkbox = document.querySelector('#bissexto');

function calcularIdade () {
    let name = String(nome.value);
    let old = Number(yOld.value);
    old = old * 365;
    
    if (checkbox.checked) {
        alert("Não aceita ano bissexto")
    } else {
        resultado.innerHTML=(name + ' ' + 'você tem' + ' ' + old + ' ' +'dias de vida');
    }
}

calcular.onclick = function () {
    calcularIdade();
}