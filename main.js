let numero1 = document.querySelector('#entrada1');
let numero2 = document.querySelector('#entrada2');
let resultado = document.querySelector('#resultado');

function somar() {
    let final = Number(numero1.value) + Number(numero2.value);
    resultado.value = final
}

function subtrair() {
    let final = Number(numero1.value) - Number(numero2.value);
    resultado.value = final;
}

function multiplicar() {
    let final = Number(numero1.value) * Number(numero2.value);
    resultado.value = final;
}

function dividir() {
    let final = Number(numero1.value) / Number(numero2.value);
    resultado.value = final;
}


/*function imc(){
    let altura1 = document.querySelector('#altura').value;
    let peso1 = document.querySelector('#peso').value;

    let resultadoIMC = Number(peso1)/(Number(altura1)*Number(altura1));

    document.querySelector('#imc').value = resultadoIMC.tofixed(2);

    //definir as considerações baseadas no IMC calculado
    let consideracoes = document.getElementById('#consideracoes');
    if(resultadoIMC < 18.5) {
    consideracoes.textContent = 'abaixo do peso';
    } else if(resultadoIMC >=18.5 && resultadoIMC <= 24.9){
        consideracoes.textContent = 'Peso Normal';
    } else if(resultadoIMC >= 24.9){
        consideracoes.textContent = 'acima do peso';
    } else if (resultadoIMC >= 30 && resultadoIMC <= 34.9)
    }
}*/


function imc() {
   
    let altura = document.querySelector('#altura').value;
    let peso = document.querySelector('#peso').value;

    let resultadoIMC = Number(peso) / (Number(altura) * Number(altura));

    document.querySelector('#imc').value = resultadoIMC.toFixed(2);

    // Definir as considerações baseadas no IMC calculado
    let consideracoes = document.getElementById('consideracoes');
    if (resultadoIMC < 18.5) {
        consideracoes.textContent = 'Abaixo do peso';
    } else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) {
        consideracoes.textContent = 'Peso normal';
    } else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) {
        consideracoes.textContent = 'Sobrepeso';
    } else if (resultadoIMC >= 30 && resultadoIMC <= 34.9) {
        consideracoes.textContent = 'Obesidade grau 1';
    } else if (resultadoIMC >= 35 && resultadoIMC <= 39.9) {
        consideracoes.textContent = 'Obesidade grau 2';
    } else {
        consideracoes.textContent = 'Obesidade grau 3';
    }

}