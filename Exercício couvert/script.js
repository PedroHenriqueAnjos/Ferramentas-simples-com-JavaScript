function calcular(){
let valor, pessoas, couvert, resultado;

valor = document.getElementById('txt_valor').value;
pessoas = document.getElementById('txt_pessoas').value;
couvert = document.getElementById('txt_couvert').value;

valor =Number(valor);
pessoas=Number(pessoas);
couvert=Number(couvert);
resultado=Number(resultado);


if (document.getElementById('txt_select').value == 'sim'){
    document.getElementById('p').innerHTML = (resultado = (valor + couvert) / pessoas);
}


else {
    document.getElementById('p').innerHTML = (resultado = valor / pessoas);
}



}